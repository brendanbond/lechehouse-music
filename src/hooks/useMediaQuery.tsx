import { useState, useEffect } from 'react';

const isBuilding = typeof window === 'undefined';

const useMediaQuery = (mediaQuery: string) => {
  const [isVerified, setIsVerified] = useState(() => {
    if (isBuilding) return false;
    return !!window.matchMedia(mediaQuery).matches;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(mediaQuery);
      const documentChangeHandler = () =>
        setIsVerified(!!mediaQueryList.matches);

      mediaQueryList.addEventListener('change', documentChangeHandler);

      documentChangeHandler();
      return () => {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      };
    }
    return undefined;
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;
