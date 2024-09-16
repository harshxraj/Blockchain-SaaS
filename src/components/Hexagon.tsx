import { useLayoutEffect, useRef, useState, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Hexagon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number; reverse?: boolean; duration?: number }
) => {
  const { className, size = 800, reverse = false, duration = 30 } = props;
  const pathRef = useRef<SVGPathElement>(null);
  const [totalPathLenght, setTotalPathLength] = useState<number>();

  useLayoutEffect(() => {
    const pathLength = pathRef.current?.getTotalLength();
    if (!pathLength) return;
    const scaledPathLength = (pathLength * size) / 82;
    setTotalPathLength(scaledPathLength);
  }, []);

  return (
    <div className="relative inline-flex">
      <svg
        width="82"
        height="72"
        viewBox="0 0 82 72"
        fill="none"
        strokeWidth="6"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge("text-fuchsia-500/10 -rotate-6", className)}
        style={{
          height: size,
          width: size,
        }}
      >
        <path
          d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
          vectorEffect="non-scaling-stroke"
          ref={pathRef}
        />
      </svg>
      {totalPathLenght && (
        <motion.svg
          width="82"
          height="72"
          viewBox="0 0 82 72"
          fill="none"
          strokeWidth="6"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className={twMerge("text-fuchsia-500/30 -rotate-6 absolute", className)}
          initial={{
            strokeDashoffset: 0,
          }}
          animate={{
            strokeDashoffset: reverse ? totalPathLenght : totalPathLenght * -1,
          }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
          }}
          style={{
            strokeDasharray: `500 ${totalPathLenght - 500}`,
            strokeDashoffset: "-2800",
            height: size,
            width: size,
          }}
        >
          <path
            d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
            vectorEffect="non-scaling-stroke"
          />
        </motion.svg>
      )}
    </div>
  );
};
