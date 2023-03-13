export const checkMobileDevice = () => {
  if (navigator.userAgentData) {
    return navigator.userAgentData.mobile;
  }

  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(navigator.userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(navigator.userAgent)
  );
};
