import { useState, useEffect } from 'react';

const useMediaQuery = (mediaQuery: string) => {
  const [isVerified, setIsVerified] = useState(
    !!window.matchMedia(mediaQuery).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

    mediaQueryList.addEventListener('change', () => documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;
