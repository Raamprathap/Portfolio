import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import React, { useRef, useState } from "react";
import { FloatingDock } from "./ui/floating-dock";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Try again.");
        },
      );
  };

  const links = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-[var(--dock-icon)]" />,
      href: "https://www.linkedin.com/in/raamprathap-rajarathinam/",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-[var(--dock-icon)]" />,
      href: "https://github.com/Raamprathap",
    },
    {
      title: "Instagram",
      icon: <Instagram className="h-full w-full text-[var(--dock-icon)]" />,
      href: "//https://www.instagram.com/_.raam._17",
    },
    {
      title: "Email",
      //dark:text-neutral-300
      icon: <Mail className="h-full w-full text-[var(--dock-icon)]" />,
      href: "mailto:raamprathap17242@gmail.com",
    },
  ];
  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-5xl text-[var(--text-primary)] kaushan-script-regular">
          Contact
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-md mx-auto">
          <h1 className="text-3xl text-[var(--text-primary)]">Get in Touch</h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Have a question, idea, or just want to talk tech and creativity? I'd
            love to hear from you and see where the conversation takes us!
          </p>
          <p className="text-lg text-[var(--text-secondary)] flex items-center justify-center space-x-2 gap-4 my-8">
            Social Links:
            <FloatingDock items={links} />
          </p>
        </div>
        <div className="shadow-input mx-auto w-full max-w-4xl rounded-lg bg-[var(--bg-card)] p-4 md:rounded-2xl md:p-8">
          <form
            className="my-8 flex flex-col md:flex-row space-x-5"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-4 flex flex-col md:w-sm space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="fullname">Full name</Label>
                  <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Raam Prathap"
                    type="text"
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="raam@email.com"
                  type="email"
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Your subject here..."
                  type="text"
                />
              </LabelInputContainer>
            </div>

            <div className="hidden md:block w-px bg-[var(--border-primary)]" />

            <div>
              <LabelInputContainer className="mb-4 md:w-sm">
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  type="text"
                  required
                  className="h-32 resize-none"
                />
              </LabelInputContainer>
              <button
                className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-[var(--button-primary-bg)] via-[var(--accent-blue)] to-[var(--button-primary-bg)] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]" //dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    Submit
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                    <BottomGradient />
                  </span>
                ) : (
                  <span>
                    Submit &rarr;
                    <BottomGradient />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[var(--accent-blue)] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
