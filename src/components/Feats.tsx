import { useEffect, useState, useCallback } from "react";
import { IMAGE_MANIFESTS, LOGO_MANIFESTS } from "../data/image-manifests";

interface Hackathon {
  title: string;
  desc: string;
  images: string;
  postUrl?: string;
}

const hackathons: Hackathon[] = [
  {
    title: "DEVTrails",
    desc: "Out of 18,000+ students and 4,400+ teams across 30 universities in India, our team placed 2nd at the Guidewire DEVTrails University Hackathon 2026 — organized by Guidewire and partnered with Ernst & Young (EY). We built Continuum, an AI-powered parametric insurance platform protecting gig delivery workers from income loss due to app outages, severe weather, and civic disruptions — with automatic UPI payouts and zero manual claims.",
    images: "devtrails",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7461352891841376256/",
  },
  {
    title: "Anokha Techfair",
    desc: "Runner-Up at Anokha TechFair 2026 — Amrita University's flagship national techfest — selected among 200+ projects across software, hardware, and research tracks. Built Growgle, an AI-powered career intelligence platform that synthesizes policy signals, economic shifts, and real-time job data into personalized career roadmaps. Powered by Gemini + Vertex AI Vector Search with multi-source RAG. Originally built for the Google Cloud Gen AI Exchange Hackathon, Growgle was carried forward, refined, and validated by founders, researchers, and industry leaders at Anokha.",
    images: "tech-fair",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7430969114170466305/",
  },
  {
    title: "Build2Break Hackathon",
    desc: "Won 1st Place at Build2Break — the 24-hour hackathon at Anokha TechFair, Amrita University's flagship national techfest — taking home the Rs. 25,000 prize. Built MedConnect, a unified healthcare platform consolidating appointments, secure video consultations, and longitudinal medical records into a single role-based workflow — eliminating tool-switching for doctors entirely. What made Build2Break unique was its 'Break' phase, where teams stress-tested each other's products in real time, demanding robust, failure-proof code from the start. Delivered a fully functional, stable product to the judges after 24 straight hours of building.",
    images: "build2break",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7416015533298466816/",
  },
  {
    title: "OpenEnv",
    desc: "Reached the final 800 out of 31,000+ registered teams at the Meta PyTorch OpenEnv Hackathon x Scaler School of Technology — organized by Meta, PyTorch, Hugging Face, and Scaler. Built on OpenEnv, Meta's open reinforcement learning environment framework, competing against some of the strongest university teams globally.",
    images: "openenv",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7452726262005145600/",
  },
  {
    title: "Vertex Innovate VIT",
    desc: "Won 1st Place (Overall + Hardware Track) at Vertex Innovate 2025 — a 48-hour online hackathon conducted by VIT Vellore. Competing as team Rizzless Engineers, we were selected into the final 26 teams out of 250+ registrations after a rigorous idea submission round, then won both the hardware track and the overall category at the final presentation.",
    images: "vertex",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7306547289207017472/",
  }
];

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [goToNext, images.length]);

  if (images.length === 0) return null;

  const getSlideClass = (i: number) => {
    if (i === currentIndex) {
      return isTransitioning
        ? "opacity-0 -translate-x-[60px]"
        : "opacity-100 translate-x-0 pointer-events-auto";
    }
    if (i === (currentIndex + 1) % images.length && isTransitioning) {
      return "opacity-100 translate-x-0";
    }
    return "opacity-0 translate-x-[60px]";
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-[var(--bg-secondary)]">
      <div className="relative w-full h-full">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out pointer-events-none ${getSlideClass(i)}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-5 px-2.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-300 ${
              i === currentIndex
                ? "bg-[var(--accent-blue)] scale-130 shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                : "bg-white/35 hover:bg-white/70"
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(i);
                setIsTransitioning(false);
              }, 500);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function AchievementCard({ hackathon }: { hackathon: Hackathon }) {
  const images = IMAGE_MANIFESTS[hackathon.images] ?? [];
  const logos = LOGO_MANIFESTS[hackathon.images] ?? [];

  return (
    <div className="group relative w-full max-w-4xl rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-secondary)] transition-all duration-450 ease-[cubic-bezier(0.23,1,0.32,1)] animate-[featCardEnter_0.7s_ease-out_both] hover:-translate-y-1.5 hover:scale-[1.012] hover:border-[var(--accent-blue)] hover:shadow-[0_24px_64px_-12px_rgba(59,130,246,0.18),0_8px_24px_-8px_rgba(0,0,0,0.4)]">
      <div className="relative z-2">
        <div className="relative w-full overflow-hidden">
          <ImageCarousel images={images} />

          {logos.length > 0 && (
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-white/25 bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-115 group-hover:border-[var(--accent-blue)] group-hover:shadow-[0_4px_16px_rgba(59,130,246,0.35)] sm:w-[34px] sm:h-[34px]"
                >
                  <img
                    src={logo}
                    alt={`Organizer ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-4">
          <h3 className="text-2xl sm:text-xl font-bold mb-2 bg-gradient-to-br from-white to-[var(--accent-blue)] bg-clip-text text-transparent transition-[filter] duration-300 group-hover:brightness-120">
            {hackathon.title}
          </h3>
          <p className="text-[0.95rem] sm:text-sm leading-relaxed text-[var(--text-secondary)]">
            {hackathon.desc}
          </p>
          {hackathon.postUrl && (
            <a
              href={hackathon.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 mt-4 py-2 text-sm font-semibold text-[var(--accent-blue)] no-underline relative transition-colors duration-300 hover:text-blue-400 after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--accent-blue)] after:rounded-sm after:transition-[width] after:duration-350 after:ease-[cubic-bezier(0.23,1,0.32,1)] hover:after:w-full"
            >
              View the Story
              <span className="inline-block text-lg transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/link:translate-x-1.5">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Feats() {
  return (
    <div className="w-full mx-auto my-8 px-8 py-0 text-[var(--text-primary)]">
      <div className="text-center mb-8">
        <h1 className="text-5xl kaushan-script-regular">Feats</h1>
        <p className="text-lg mx-auto mt-4 text-[var(--text-secondary)]">
          Milestones, victories, and experiences from hackathons and competitions
          that shaped my journey as a developer.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 pt-4 pb-16">
        {hackathons.map((h, idx) => (
          <AchievementCard key={idx} hackathon={h} />
        ))}
      </div>
    </div>
  );
}
