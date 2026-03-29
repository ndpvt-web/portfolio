export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: "linkedin" | "github" | "email";
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "GitHub", href: "https://github.com/ndpvt-web", external: true },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/niveshdandyan",
  },
  {
    platform: "github",
    label: "GitHub (ndpvt-web)",
    href: "https://github.com/ndpvt-web",
  },
  {
    platform: "github",
    label: "GitHub (niveshdandyan)",
    href: "https://github.com/niveshdandyan",
  },
  {
    platform: "email",
    label: "niveshdandyan@gmail.com",
    href: "mailto:niveshdandyan@gmail.com",
  },
];
