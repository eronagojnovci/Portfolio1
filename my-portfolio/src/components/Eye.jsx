import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const Eye = () => {
  const eyeRef = useRef(null);

  const x = useMotionValue(-10);
  const y = useMotionValue(0);

  // Premium smooth spring
  const springX = useSpring(x, {
    stiffness: 300,
    damping: 25,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 25,
    mass: 0.2,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;

      const angle = Math.atan2(dy, dx);

      const maxMove = 6;
      x.set(Math.cos(angle) * maxMove);
      y.set(Math.sin(angle) * maxMove);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Idle position - left side
  useEffect(() => {
    let timeout;
    
    const resetToLeft = () => {
      timeout = setTimeout(() => {
        x.set(-10);
        y.set(0);
      }, 1500);
    };

    const handleMouseMove = () => {
      clearTimeout(timeout);
      resetToLeft();
    };

    window.addEventListener("mousemove", handleMouseMove);
    resetToLeft();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [x, y]);

  return (
    <div className="eye" ref={eyeRef}>
      <motion.div
        className="pupil"
        style={{
          x: springX,
          y: springY,
        }}
      />
    </div>
  );
};

export default Eye;
