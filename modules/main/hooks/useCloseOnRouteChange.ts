import { useEffect } from 'react';

import { useRouter } from 'next/router';

const useCloseOnRouteChange = (onClose: () => void) => {
  const router = useRouter();

  useEffect(() => {
    const callback = () => {
      onClose();
    };

    router.events.on('routeChangeStart', callback);
    return () => {
      router.events.off('routeChangeStart', callback);
    };
  }, [onClose, router.events]);
};

export default useCloseOnRouteChange;
