'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

//have to study this 

interface PriceCounterProps {
  value: number;
  duration?: number;
}

export function PriceCounter({ value, duration = 1 }: PriceCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67); // 60fps //necessary to learn more about 

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}