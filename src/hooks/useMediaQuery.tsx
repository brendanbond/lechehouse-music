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

      mediaQueryList.addListener(documentChangeHandler); // TODO: move from deprecated once this bug (https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent) is fixed

      documentChangeHandler();
      return () => {
        mediaQueryList.removeListener(documentChangeHandler);
      };
    }
    return undefined;
  }, [mediaQuery]);

  return isVerified;
};

export default useMediaQuery;
