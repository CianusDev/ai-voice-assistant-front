/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="w-full inline-flex flex-wrap">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={`word-${idx}`}
              className="dark:text-white text-md text-white opacity-0 mr-[0.3em]"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold w-full", className)}>
      <div className=" w-full">
        <div className="dark:text-white text-black text-2xl w-full leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
