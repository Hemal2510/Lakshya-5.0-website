import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 20%"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Different animation values for desktop and mobile

const rotate = useTransform(
  scrollYProgress,
  [0, 0.8, 1],
  isMobile ? [28, 0, 0] : [50, 0, 0]
);

const scale = useTransform(
  scrollYProgress,
  [0, 0.8, 1],
  isMobile ? [0.88, 1, 1] : [0.82, 1, 1]
);

const headerTranslate = useTransform(
  scrollYProgress,
  [0, 0.5],
  [0, -40]
);

const cardTranslate = useTransform(
  scrollYProgress,
  [0, 0.8, 1],
  isMobile ? [40, 0, 0] : [100, 0, 0]
);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
         perspective: isMobile ? "1200px" : "2200px",
        }}
      >
        <Header
  translate={headerTranslate}
  titleComponent={titleComponent}
/>

<Card
  rotate={rotate}
  translate={cardTranslate}
  scale={scale}
>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        border: "2px solid rgba(240,181,43,0.30)",
        background: "rgba(20,10,3,0.95)",
        boxShadow:
          "0 0 60px rgba(240,181,43,0.08), 0 40px 120px rgba(0,0,0,0.6), 0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042",
      }}
      className="
w-full
max-w-[95vw]
xl:max-w-[1450px]
2xl:max-w-[1600px]
mx-auto
h-[34rem]
md:h-[46rem]
rounded-[30px]
-mt-12
"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
