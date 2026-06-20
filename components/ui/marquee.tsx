"use client";

import React, { type ComponentPropsWithoutRef, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  /**
   * Duration in seconds for one full loop
   * @default 40
   */
  duration?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = 40,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDown = useRef(false);
  
  // Physics & Inertia Tracking Refs
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  
  // Touch swipe swipe direction lock
  const isHorizontalSwipe = useRef<boolean | null>(null);
  
  // Animation / Rendering Refs
  const rafId = useRef<number | null>(null);
  const isHovered = useRef(false);
  const lastFrameTime = useRef(0);
  const isInitialized = useRef(false);

  // Compute block width of a single set of elements
  const getBlockWidth = () => {
    if (!containerRef.current) return 0;
    return containerRef.current.scrollWidth / repeat;
  };

  // Seamless scroll wrapping logic
  const wrapScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const blockWidth = getBlockWidth();
    if (blockWidth <= 0) return;

    if (!vertical) {
      const currentScroll = container.scrollLeft;
      if (currentScroll >= blockWidth * 2.5) {
        container.scrollLeft = currentScroll - blockWidth;
      } else if (currentScroll <= blockWidth * 0.5) {
        container.scrollLeft = currentScroll + blockWidth;
      }
    } else {
      const currentScroll = container.scrollTop;
      if (currentScroll >= blockWidth * 2.5) {
        container.scrollTop = currentScroll - blockWidth;
      } else if (currentScroll <= blockWidth * 0.5) {
        container.scrollTop = currentScroll + blockWidth;
      }
    }
  };

  // High performance unified animation and physics loop
  useEffect(() => {
    lastFrameTime.current = performance.now();

    const loop = (time: number) => {
      if (!containerRef.current) {
        rafId.current = requestAnimationFrame(loop);
        return;
      }

      const container = containerRef.current;
      const dt = time - lastFrameTime.current;
      lastFrameTime.current = time;

      // 1. Initialize scroll to middle copy once widths are computed
      if (!isInitialized.current) {
        const blockWidth = getBlockWidth();
        if (blockWidth > 0) {
          if (!vertical) {
            container.scrollLeft = blockWidth;
          } else {
            container.scrollTop = blockWidth;
          }
          isInitialized.current = true;
        }
      }

      // 2. Perform animation or physics deceleration
      if (!isDown.current && !isHovered.current && velocity.current === 0) {
        // Auto scroll mode
        const blockWidth = getBlockWidth();
        if (blockWidth > 0) {
          const pxPerMs = blockWidth / (duration * 1000);
          const dist = pxPerMs * dt * (reverse ? -1 : 1);
          
          if (!vertical) {
            container.scrollLeft += dist;
          } else {
            container.scrollTop += dist;
          }
          wrapScroll();
        }
      } else if (velocity.current !== 0) {
        // Momentum / inertia mode (decelerating)
        const friction = 0.95; // high-quality friction decay
        const distance = velocity.current * dt;

        if (!vertical) {
          container.scrollLeft -= distance;
        } else {
          container.scrollTop -= distance;
        }

        // Apply friction decay relative to frame duration
        velocity.current *= Math.pow(friction, dt / 16);
        wrapScroll();

        // Stop deceleration if it becomes imperceptible
        if (Math.abs(velocity.current) < 0.005) {
          velocity.current = 0;
          setIsDragging(false);
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [duration, reverse, vertical, repeat]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDown.current = true;
    setIsDragging(true);
    isHorizontalSwipe.current = null;
    velocity.current = 0; // stop inertia immediately when grabbed

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    startX.current = pageX - (containerRef.current?.offsetLeft || 0);
    startY.current = pageY - (containerRef.current?.offsetTop || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    scrollTop.current = containerRef.current?.scrollTop || 0;

    lastX.current = pageX;
    lastY.current = pageY;
    lastTime.current = performance.now();
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDown.current || !containerRef.current) return;

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    const x = pageX - containerRef.current.offsetLeft;
    const y = pageY - containerRef.current.offsetTop;

    const walkX = x - startX.current;
    const walkY = y - startY.current;

    // Detect gesture direction to avoid hijacking page scroll on mobile
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(walkX) > Math.abs(walkY)) {
        isHorizontalSwipe.current = true;
      } else {
        isHorizontalSwipe.current = false;
      }
    }

    // Calculate physics velocity based on instantaneous delta
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      const dx = pageX - lastX.current;
      const dy = pageY - lastY.current;
      velocity.current = (!vertical ? dx : dy) / dt;
    }
    lastX.current = pageX;
    lastY.current = pageY;
    lastTime.current = now;

    if (isHorizontalSwipe.current && !vertical) {
      if (e.cancelable) e.preventDefault();
      containerRef.current.scrollLeft = scrollLeft.current - walkX;
      wrapScroll();
    } else if (!isHorizontalSwipe.current && vertical) {
      if (e.cancelable) e.preventDefault();
      containerRef.current.scrollTop = scrollTop.current - walkY;
      wrapScroll();
    }
  };

  const handleEnd = () => {
    isDown.current = false;
    isHorizontalSwipe.current = null;
    
    // If released with very low speed, reset velocity to zero
    if (Math.abs(velocity.current) < 0.05) {
      velocity.current = 0;
      setIsDragging(false);
    }
  };

  useEffect(() => {
    const handleWindowMouseUp = () => {
      if (isDown.current) {
        handleEnd();
      }
    };
    window.addEventListener("mouseup", handleWindowMouseUp);
    return () => window.removeEventListener("mouseup", handleWindowMouseUp);
  }, []);

  return (
    <div
      {...props}
      ref={containerRef}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={() => {
        isHovered.current = false;
        handleEnd();
      }}
      onMouseEnter={() => {
        if (pauseOnHover) isHovered.current = true;
      }}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onDragStart={(e) => e.preventDefault()}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 cursor-grab active:cursor-grabbing select-none",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      style={{
        touchAction: vertical ? "pan-x" : "pan-y",
        ...props.style,
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-(--gap) pointer-events-none", {
              "flex-row": !vertical,
              "flex-col": vertical,
            })}
          >
            <div className="flex shrink-0 justify-around gap-(--gap) pointer-events-auto">
              {children}
            </div>
          </div>
        ))}
    </div>
  );
}
