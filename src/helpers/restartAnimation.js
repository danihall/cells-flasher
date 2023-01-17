/**
 * @param {HTMLElement} element
 */
const restartAnimation = (element) => {
  const animation = element.getAnimations()[0];
  animation?.cancel();
  animation?.play();
};

export { restartAnimation };
