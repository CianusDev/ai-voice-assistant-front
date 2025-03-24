/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";

const TrioLoader = dynamic(
  () =>
    import("ldrs").then((mod) => {
      mod.trio.register();
      return () => (
        // @ts-ignore
        <l-trio size="80" speed="1.75" color="#fbc2eb" />
      );
    }),
  { ssr: false }
);

export function AiBot({isLoading}: {isLoading?: boolean}) {
  return (
    <AnimatePresence>
      {!isLoading ? (
        <motion.div
          initial={{
            rotate: 360,
            scale: 1,
        }}
        animate={{
          rotate: 0,
          scale: 1.02,
        }}
        transition={{
          duration: 6,
          scale: {
            type: "spring",
            stiffness: 50,
            damping: 15,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        className="bg-ai-gradient shadow perspective-distant rounded-full p-4 size-42"
      />
      ) : (
        <motion.div
          initial={{
            rotate: 360,
            scale: 1,
          }}
          animate={{
            rotate: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 6,
            scale: {
              type: "spring",
              stiffness: 50,
              damping: 15,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          exit={{
            rotate: 360,
            scale: 1,
          }}
        >
          <TrioLoader />
        </motion.div>
      )}
      <div className="flex items-center justify-center"></div>
    </AnimatePresence>
  );
}
