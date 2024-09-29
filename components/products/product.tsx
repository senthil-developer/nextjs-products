"use client";

import { ProductType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

export const Product = (product: ProductType) => {
  const variants = {
    hidden: { y: "30%", opacity: 0, filter: "blur(20px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  return (
    <motion.div
      className="flex flex-col gap-2 border-2 border-black rounded-lg p-2"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <div className="w-40 relative aspect-square group border-b-2 border-black border-opacity-50">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width:768px) 100vw,(max-width : 1200px) 50vw,33vw"
          className="object-cover"
        />
      </div>
      <div className="w-40 flex justify-between items-center">
        <p className="w-[80%] line-clamp-3">{product.title}</p>
        <div className="flex flex-col gap-2">
          <span
            style={
              {
                "--rating": product.rating,
                backgroundColor: "black",
              } as React.CSSProperties
            }
            className="star size-10 relative"
          ></span>
          <p>{product.rating}</p>
        </div>
      </div>
    </motion.div>
  );
};
