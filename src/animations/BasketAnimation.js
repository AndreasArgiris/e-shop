export const BasketAnimation = {
  initial: {
    opacity: 0,
    x: 400,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 400,
    transition: {
      duration: 0.2,
    },
  },
};
export const BasketProductAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.2,
    },
  },
};
