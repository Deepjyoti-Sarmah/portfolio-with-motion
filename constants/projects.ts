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
    href: "https://invoice-cart.vercel.app",
    description: "A SaaS platform for creating and managing invoices.",
  },
  {
    title: "Ping-panda",
    src: "/ping-panda.png",
    href: "https://ping-panda-rust.vercel.app",
    description:
      "A SaaS platform for sending and receiving notifications over discord.",
  },
  {
    title: "Record-scribe",
    src: "/record-scribe.png",
    href: "https://recordscribe.vercel.app",
    description:
      "A website which translate and transcribe audio to different languages.",
  },
  {
    title: "Better LS (Rust)",
    src: "https://opengraph.githubassets.com/1/Deepjyoti-Sarmah/better-ls-rust",
    href: "https://github.com/Deepjyoti-Sarmah/better-ls-rust",
    description:
      "A blazing fast, user-friendly alternative to the Unix `ls` command written in Rust.",
  },
  {
    title: "Bitcoin Burner Wallet (Go)",
    src: "https://opengraph.githubassets.com/1/Deepjyoti-Sarmah/bitcoin-burner-wallet-go",
    href: "https://github.com/Deepjyoti-Sarmah/bitcoin-burner-wallet-go",
    description:
      "A lightweight Bitcoin wallet written in Go for ephemeral, burner-style transactions.",
  },
  {
    title: "Go Async APIs",
    src: "https://opengraph.githubassets.com/1/Deepjyoti-Sarmah/go_async_apis",
    href: "https://github.com/Deepjyoti-Sarmah/go_async_apis",
    description:
      "A high-performance asynchronous API server in Go using worker pool patterns and queue management.",
  }
];
