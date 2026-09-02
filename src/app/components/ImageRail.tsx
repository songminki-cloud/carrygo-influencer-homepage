"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "../content";

export function ImageRail() {
  return (
    <div className="image-rail" aria-label="Carry lookbook preview">
      {siteContent.frames.map((frame, index) => (
        <motion.figure
          className={`look-frame frame-${index + 1}`}
          key={frame.src}
          initial={{ opacity: 0, y: 36, rotate: index % 2 ? 2 : -2 }}
          animate={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={frame.src} alt={frame.alt} fill sizes="(max-width: 768px) 50vw, 22vw" priority={index < 2} />
          <figcaption>{frame.caption}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
