export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  note: string;
  icon: "camera" | "pinterest" | "play";
  accent: string;
};

export const siteContent = {
  brand: "CarryGo",
  eyebrow: "AI K-FASHION CURATOR",
  headline: "Carry wears Seoul.",
  intro: "K-fashion looks, styled by Carry and published across the feeds that matter.",
  disclosure: "AI-generated fashion editorial",
  socials: [
    {
      label: "Instagram",
      handle: "@carrygoseoul",
      href: "https://instagram.com/carrygoseoul",
      note: "daily looks",
      icon: "camera",
      accent: "var(--coral)",
    },
    {
      label: "Pinterest",
      handle: "Carry Looks",
      href: "https://www.pinterest.com/",
      note: "shop the mood",
      icon: "pinterest",
      accent: "var(--acid)",
    },
    {
      label: "YouTube",
      handle: "CarryGo Seoul",
      href: "https://www.youtube.com/@carrygoseoul",
      note: "style shorts",
      icon: "play",
      accent: "var(--sky)",
    },
  ] satisfies SocialLink[],
  frames: [
    {
      src: "/images/carry-cafe-mirror.jpg",
      alt: "Carry taking a mirror selfie in a sunlit cafe",
      caption: "cafe light",
    },
    {
      src: "/images/carry-white-ruffle.png",
      alt: "Carry taking a mirror selfie in a white ruffle mini dress",
      caption: "mirror",
    },
    {
      src: "/images/carry-gray-knit.png",
      alt: "Carry in a gray ribbed knit dress in a clean Seoul interior",
      caption: "gray knit",
    },
    {
      src: "/images/carry-ivory-knit.jpg",
      alt: "Carry in an ivory knit dress walking outside during golden hour",
      caption: "golden hour",
    },
  ],
  footerLinks: [
    {
      label: "Privacy",
      href: "/privacy/",
    },
    {
      label: "Contact",
      href: "mailto:help@carrygoseoul.com",
    },
  ],
};
