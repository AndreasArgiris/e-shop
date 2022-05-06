export const Products2ContainerAnimation = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    x: -200,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Products2Animation = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
};
