/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import {  motion } from "motion/react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
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

export function AiBot({isLoading, className}: {isLoading?: boolean, className?: string}) {
  return (!isLoading ? (
        <motion.div
          initial={{
            scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 50,
            damping: 15,
          },
        }}
        className={cn("layout-gradient shadow perspective-distant rounded-full p-4 size-42", className)}
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
      )
  )
}
