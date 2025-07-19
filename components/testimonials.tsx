import React from "react";
import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const TestimonialsPage = () => {
  const data = [
    {
      quote:
        "Deepjyoti didn’t just ship features—he reshaped the architecture of our backend. His async worker queues saved us thousands in ops costs.",
      name: "Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      quote:
        "One of the sharpest engineers I’ve worked with. Deepjyoti built a high-concurrency ticketing system that never missed a beat under load.",
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      quote:
        "Every project Deepjyoti touches becomes easier to scale and maintain. His event-driven architecture and queue-based design are battle-tested.",
      name: "Carlos Méndez",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      quote:
        "Deepjyoti helped us integrate Clerk, Supabase, and modern tooling in record time. His ability to combine frontend and backend fluidly is rare.",
      name: "Nico Tanaka",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0",
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
    <div className="mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 px-4  transition duration-300 shadow shadow-secondary hover:shadow-lg hover:scale-[1.01] ease-in-out bg-card">
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
