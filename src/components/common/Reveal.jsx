import { useInView } from '../../hooks/useInView.js';

/**
 * Fades + slides its children in when scrolled into view.
 * Respects prefers-reduced-motion via CSS (see .reveal in index.css).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

