export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Invoice-Cart",
    src: "/invoice-cart.png",
    href: "#",
    description: "A SaaS platform for creating and managing invoices.",
  },
  {
    title: "Ping-panda",
    src: "/ping-panda.png",
    href: "#",
    description:
      "A SaaS platform for sending and receiving notifications over discord.",
  },
  {
    title: "Record-scribe",
    src: "/record-scribe.png",
    href: "#",
    description:
      "A website which translate and transcribe audio to different languages.",
  },
];
