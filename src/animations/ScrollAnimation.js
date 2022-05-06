import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
//collection of on scroll animations to import them to components
export const ScrollAnimation = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25, triggerOnce: true });

  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls];
};

export const ScrollAnimationContact = () => {
  const controls2 = useAnimation();
  const [element2, view] = useInView({ threshold: 0.25, triggerOnce: false });

  if (view) {
    controls2.start("animate");
  } else {
    controls2.start("initial");
  }
  return [element2, controls2];
};
