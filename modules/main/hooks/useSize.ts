import { useBreakpoint } from './useBreakpoint';

export const useSize = () => {
  const { isMobile } = useBreakpoint();

  return isMobile ? 'small' : 'regular';
};
