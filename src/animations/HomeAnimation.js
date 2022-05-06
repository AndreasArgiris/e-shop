export const MainModelAnimation = {
  initial: {
    scaleY: 2,
    scaleX: 1.7,
  },

  animate: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      duration: 3,
    },
  },
};

export const AnotherModelsAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 3.5,
    },
  },
};
export const TextAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4,
    },
  },
};
export const TextAnimation2 = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4.2,
    },
  },
};
export const TextAnimation3 = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 4.2,
    },
  },
};
export const WrapperAnimation = {
  exit: {
    top: 0,
    height: "100%",
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
};
export const WrapperAnimation2 = {
  exit: {
    top: 0,
    height: "100%",
    transition: {
      duration: 1,
    },
  },
};
export const HomeAnimation = {
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
export const IconAnimation = {
  initial: {
    rotate: [0],
  },
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 4,
      delay: 4.7,
      yoyo: Infinity,
    },
  },
};
