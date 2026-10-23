import { useEffect, useState } from 'react';

/**
 * Minimal hash router. Routes starting with "#/" are pages (e.g. "#/kit");
 * everything else (e.g. "#portfolio") is treated as an in-page anchor on the home page.
 */
export function useHashRoute() {
  const getRoute = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/');
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

