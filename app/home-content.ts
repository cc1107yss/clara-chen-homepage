export const homeContent = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Thoughts", href: "#thoughts" },
    { label: "Contact", href: "#contact" },
  ],
  name: { first: "Clara", last: "Chen" },
  statement: [
    "I explore the space",
    "where mathematics,",
    "art, and design",
    "intersect.",
  ],
  roles: ["Researcher. Designer.", "Builder. Dreamer."],
  traits: ["Systems Thinker", "Visual Storyteller", "Problem Solver"],
  cta: "Explore My Work",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/clara-chen-1b11a2419/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/cc1107yss",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:clarachen07@foxmail.com",
      external: false,
    },
  ],
} as const;
