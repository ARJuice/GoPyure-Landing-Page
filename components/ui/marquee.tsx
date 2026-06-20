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
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);
  const isDown = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDown.current = true;
    setIsDragging(true);
    isHorizontalSwipe.current = null;

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    startX.current = pageX - (containerRef.current?.offsetLeft || 0);
    startY.current = pageY - (containerRef.current?.offsetTop || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    scrollTop.current = containerRef.current?.scrollTop || 0;
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDown.current || !containerRef.current) return;

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const pageY = "touches" in e ? e.touches[0].pageY : e.pageY;

    const x = pageX - containerRef.current.offsetLeft;
    const y = pageY - containerRef.current.offsetTop;

    const walkX = x - startX.current;
    const walkY = y - startY.current;

    // Detect gesture direction (horizontal vs vertical) on first movement
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(walkX) > Math.abs(walkY)) {
        isHorizontalSwipe.current = true;
      } else {
        isHorizontalSwipe.current = false;
      }
    }

    if (isHorizontalSwipe.current && !vertical) {
      if (e.cancelable) e.preventDefault();
      containerRef.current.scrollLeft = scrollLeft.current - walkX;
    } else if (!isHorizontalSwipe.current && vertical) {
      if (e.cancelable) e.preventDefault();
      containerRef.current.scrollTop = scrollTop.current - walkY;
    }
  };

  const handleEnd = () => {
    isDown.current = false;
    setIsDragging(false);
    isHorizontalSwipe.current = null;
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
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onDragStart={(e) => e.preventDefault()}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem] cursor-grab active:cursor-grabbing select-none",
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
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-play-state:paused]": isDragging,
              "[animation-direction:reverse]": reverse,
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
