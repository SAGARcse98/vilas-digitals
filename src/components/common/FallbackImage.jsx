/**
 * Image that swaps to a branded placeholder if the source fails to load.
 * Lazy-loads and decodes asynchronously by default (pass loading="eager" for above-the-fold images).
 */
export default function FallbackImage({
  src,
  alt,
  fallbackText = 'Vilas+Digitals',
  size = '600x400',
  bg = '151519',
  className,
  loading = 'lazy',
  ...rest
}) {
  const fallback = `https://placehold.co/${size}/${bg}/d4af37?text=${fallbackText}`;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
      }}
      {...rest}
    />
  );
}
