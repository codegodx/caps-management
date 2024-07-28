"use client";
import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/LIB/utils";
import Balancer from "react-wrap-balancer";

export default function HeroParallax({
  className,
  products,
  headerTitle,
  headerDesc,
  textclassName,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  className?: string;
  headerTitle?: string;
  headerDesc?: string;
  textclassName?: string;
}) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 100]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className={cn(
        "h-[300vh] overflow-hidden relative antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",
        className,
      )}
    >
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent opacity-60 z-50"></div>
      <div className="absolute left-0 w-10 h-full shadow-2xl bg-gradient-to-r from-black via-black/5 z-50 opacity-60"></div>
      <div className="absolute right-0 w-10 h-full shadow-2xl bg-gradient-to-l from-black via-black/5 z-50 opacity-60"></div>

      <div className={textclassName}>
        <Balancer ratio={0.5}>
          <h1 className="text-5xl md:text-7xl font-bold dark:text-white">
            {headerTitle || `Title Here `}
          </h1>
          <p className="max-w-2xl text-lg leading-[1.5] md:text-xl mt-4 dark:text-neutral-200">
            {headerDesc || `lorem ipsum sit amet`}
          </p>
        </Balancer>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 "
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full rounded-xl w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
