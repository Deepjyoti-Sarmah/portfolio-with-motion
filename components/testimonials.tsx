import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const TestimonialsPage = () => {
  const data = [
    {
      quote:
        "Deepjyoti is so great with his work, our production was shut dowm within the first day itself. Highly recommened",
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    },
    {
      quote:
        "Deepjyoti is so great with his work, our production was shut dowm within the first day itself. Highly recommened",
      name: "Killy Jenner",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    },
    {
      quote:
        "Deepjyoti is so great with his work, our production was shut dowm within the first day itself. Highly recommened",
      name: "Vercel",
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Deepjyoti is so great with his work, our production was shut dowm within the first day itself. Highly recommened",
      name: "Sadcn-ui",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Deepjyoti is so great with his work, our production was shut dowm within the first day itself. Highly recommened",
      name: "Microsoft",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="my-4 border-t border-secondary px-4 py-4">
      <SectionHeading className="mb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex mask-r-from-80% mask-l-from-80% py-2">
        <Marquee speed={30} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`Testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 px-4  transition duration-300 shadow shadow-secondary hover:shadow-md bg-card">
      <p className="text-sm text-muted-foreground">{quote}</p>
      <div className="flex items-center gap-4 border-t border-secondary py-2">
        <img
          src={avatar}
          alt={name}
          className="size-5 rounded-full object-cover"
        />
        <p className="text-sm text-foreground">{name}</p>
      </div>
    </div>
  );
};
