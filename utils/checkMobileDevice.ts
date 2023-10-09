export const checkMobileDevice = () => {
  if (navigator.userAgent) {
    return navigator.userAgent;
  }

  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent)
  );
};
