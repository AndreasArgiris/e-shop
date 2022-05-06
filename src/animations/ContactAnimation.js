export const ContactContainerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const ContactHeaderAnimation = {
  initial: {
    opacity: 0,
    x: -150,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: -150,
    transition: {
      duration: 0.5,
    },
  },
};
export const ContactTextAnimation = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
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
export const ContactImageAnimation = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: 200,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const ContactSvgAnimation = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
  exit: {
    x: 200,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
