"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Camera, CirclePlay } from "lucide-react";
import type { SocialLink } from "../content";

type SocialLaunchProps = {
  link: SocialLink;
  index: number;
};

export function SocialLaunch({ link, index }: SocialLaunchProps) {
  return (
    <motion.a
      className="social-card"
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
      style={{ "--accent": link.accent } as CSSProperties}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="social-topline">{link.note}</span>
      <span className="social-name">
        {link.label}
        <ArrowUpRight aria-hidden="true" className="arrow-icon" />
      </span>
      <span className="social-handle">{link.handle}</span>
      <span className="social-mark">
        <SocialIcon icon={link.icon} />
      </span>
    </motion.a>
  );
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "pinterest") return <PinterestGlyph />;
  if (icon === "play") return <CirclePlay aria-hidden="true" className="social-icon" />;
  return <Camera aria-hidden="true" className="social-icon" />;
}

function PinterestGlyph() {
  return (
    <svg aria-hidden="true" className="social-icon" viewBox="0 0 24 24">
      <path
        d="M12.16 2.35c-5.18 0-7.8 3.72-7.8 6.82 0 1.88.71 3.55 2.24 4.17.25.1.48 0 .55-.28.05-.2.17-.68.22-.88.07-.28.04-.38-.16-.62-.44-.52-.72-1.2-.72-2.16 0-2.76 2.06-5.23 5.37-5.23 2.93 0 4.54 1.79 4.54 4.19 0 3.15-1.39 5.81-3.46 5.81-1.14 0-2-.94-1.72-2.1.33-1.38.97-2.87.97-3.86 0-.89-.48-1.64-1.47-1.64-1.17 0-2.1 1.21-2.1 2.82 0 1.03.35 1.73.35 1.73l-1.41 5.98c-.42 1.78-.06 3.96-.03 4.18.02.13.19.16.27.06.11-.15 1.55-1.92 2.04-3.69.14-.5.8-3.12.8-3.12.39.75 1.54 1.41 2.76 1.41 3.63 0 6.09-3.31 6.09-7.74 0-3.35-2.84-6.47-7.33-6.47Z"
        fill="currentColor"
      />
    </svg>
  );
}
