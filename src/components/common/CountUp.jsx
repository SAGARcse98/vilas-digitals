import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView.js';

/** Animates a stat like "1,200+" or "100%" from 0 once it scrolls into view. */
export default function CountUp({ value, duration = 1800, className }) {
  const match = /^([\d,]+)(.*)$/.exec(value);
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : 0;
  const suffix = match ? match[2] : '';
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || !match) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(target);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {match ? `${current.toLocaleString('en-IN')}${suffix}` : value}
    </span>
  );
}

