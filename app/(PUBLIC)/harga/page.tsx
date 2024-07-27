
/* eslint-disable import/order -- anjing*/
"use client";

import * as React from "react";
import { ContainerScroll } from "@/COMPONENTS/animation-tablet";
import Image from "next/image";
import { GoogleGeminiEffects } from "@/COMPONENTS/google-gemini";
import { Headerstext } from "@/CONFIG/site";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import {cn} from "@/LIB/utils";
import { Globe }  from "@/COMPONENTS/globe/globe";
import Balancer from "react-wrap-balancer"


export default function page() {
  return (

    <section>
      <GoogleGeminiEffects className="tracking-tighter leading-tight h-[55rem] relative " title={Headerstext.title} Desc={Headerstext.desc} buttonText="Telusuri" />
      <ContainerScroll
        titleComponent="Dashboard Panel."
        subtitleComponent="Memudahkan anda dalam mengelola usaha jasa servis smartphone secara digital."
        className="relative -top-[10rem] no-visible-scrollbar "

      >

        <Image
          src="/apps-1.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <HeroParallax className="w-full md:max-w-7xl md:mx-auto py-0 md:py-16 relative z-20 rounded-2xl no-visible-scrollbar " products={Products} textclassName="p-10" headerTitle="Easy and Friendly Access" headerDesc="Mudah untuk dioprasian dalam mengelola dan memanajemen jasa perbaikan smartphone. Anda dapat dengan mudah mengatur jadwal layanan, mengelola sparepart, accessories dan anda juga dapat mengakses informasi tentang status perbaikan." />
     <Globe className="max-w-screen-2xl mx-auto relative z-40"/>
    </section>


  )
}




const Products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];


const HeroParallax = ({
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
  className?: string
  headerTitle?: string
  headerDesc?: string
  textclassName?: string
}) => {
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
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className={cn("h-[300vh] overflow-hidden relative antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]", className
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
};

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





