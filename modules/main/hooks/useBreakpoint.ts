import { useCallback, useEffect, useState } from 'react';
import { checkMobileDevice } from '../../../utils/checkMobileDevice';

export const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (process.browser) {
      return checkMobileDevice();
    }

    return false;
  });

  useEffect(() => {
    setIsMobile(checkMobileDevice());
  }, []);

  const updateTarget = useCallback((event: { matches: boolean }) => {
    const isLandscape = window.orientation > 0;

    setIsMobile(isLandscape || event.matches);
  }, []);

  useEffect(() => {
    const isLandscape = window.orientation > 0;
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    mediaQuery.addListener(updateTarget);

    setIsMobile(isLandscape || mediaQuery.matches);

    return () => mediaQuery.removeListener(updateTarget);
  }, []);

  return {
    isMobile,
  };
};
