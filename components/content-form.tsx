"use client";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    // Call your api here to submit the form
    // here's a mock api call for you

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-foreground mx-auto my-6 border-t border-secondary py-12"
    >
      <div className="mx-auto flex max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground tracking-tight "
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Deepjyoti Sarmah"
            className="shadow shadow-primary border border-ring focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground tracking-tight"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="deepjyotisarmah37@gmail.com"
            className="focus:ring-primary rounded-md  px-2 py-1 text-sm shadow shadow-primary border border-ring  focus:ring-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-foreground"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="You are crazy good never change."
            className="resize-non shadow shadow-primary border border-ring focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-foreground font-semibold rounded-md px-4 py-2 text-primary-foreground border border-foreground shadow shadow-foreground hover:shadow-md hover:scale-[1.01] transition-shadow duration-300 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
