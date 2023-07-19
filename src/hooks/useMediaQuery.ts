import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleWindowResize = function () {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleWindowResize);

    // maybe the mediaQuery is already true when the component is mounted
    handleWindowResize();

    return () => {
      mediaQuery.removeEventListener('change', handleWindowResize);
    };
  }, [query]);

  return matches;
}
