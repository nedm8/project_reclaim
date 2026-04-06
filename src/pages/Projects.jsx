import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import PROJECTS from "../data/projectData";

/* ── Detect touch device ────────────────────────── */

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsTouch(mq.matches);
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isTouch;
}

/* ── Image Band (shared between desktop & mobile) ─ */

function ImageBand({
  project,
  revealed,
  gradientDirection,
  style: outerStyle = {},
}) {
  const hasImage = !!project.image;

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        ...outerStyle,
      }}
    >
      {/* Layer 1: Banner image (sits underneath) */}
      {hasImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 500ms ease, transform 500ms ease",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "scale(1.03)" : "scale(1)",
          }}
        />
      )}

      {/* Layer 2: Color gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(${gradientDirection}, ${project.color.from}, ${project.color.to})`,
          transition: "opacity 500ms ease",
          opacity: revealed && hasImage ? 0.25 : 1,
        }}
      />

      {/* Layer 3: Subtle noise texture for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── Project Card ───────────────────────────────── */

function ProjectCard({ project, index, onSelect, revealedId, onReveal }) {
  const isEven = index % 2 === 0;
  const [hovered, setHovered] = useState(false);
  const isTouch = useIsTouchDevice();

  const isRevealed = isTouch ? revealedId === project.id : hovered;

  const handleTapBand = (e) => {
    if (!isTouch) return;
    e.stopPropagation();
    e.preventDefault();
    onReveal(revealedId === project.id ? null : project.id);
  };

  return (
    <button
      onClick={() => onSelect(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 rounded-lg"
      style={{ borderRadius: "0.75rem" }}
    >
      {/* ── Desktop: alternating layout ── */}
      <div
        className="hidden md:grid overflow-hidden transition-transform duration-300 ease-out"
        style={{
          gridTemplateColumns: "1fr 1fr",
          borderRadius: "0.75rem",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 30px rgba(0,0,0,0.08)"
            : "0 1px 3px rgba(0,0,0,0.04)",
          minHeight: "clamp(180px, 14vw, 240px)",
        }}
      >
        <ImageBand
          project={project}
          revealed={isRevealed}
          gradientDirection={isEven ? "to right" : "to left"}
          style={{
            order: isEven ? 1 : 2,
            borderRadius: isEven
              ? "0.75rem 0 0 0.75rem"
              : "0 0.75rem 0.75rem 0",
          }}
        />

        <div
          className={`flex flex-col justify-center ${isEven ? "order-2" : "order-1"}`}
          style={{
            padding: "clamp(1.5rem, 2vw, 2.5rem)",
            paddingLeft: isEven
              ? "clamp(1.75rem, 2.5vw, 2.5rem)"
              : "clamp(2rem, 3vw, 2.75rem)",
            paddingRight: isEven
              ? "clamp(2rem, 3vw, 2.75rem)"
              : "clamp(1.75rem, 2.5vw, 2.5rem)",
          }}
        >
          <span
            className="block font-medium mb-1"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
              color: project.bgAccent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Project {String(project.id).padStart(2, "0")}
          </span>
          <h3
            className="font-semibold leading-tight mb-3"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.15rem, 1rem + 0.8vw, 1.5rem)",
              color: "#1c1917",
            }}
          >
            {project.title}
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.8rem, 0.75rem + 0.25vw, 0.9rem)",
              color: "#57534e",
              maxWidth: "38ch",
            }}
          >
            {typeof project.brief === "string"
              ? project.brief
              : <>{project.brief.before}{" "}<span className="text-amber-600">{project.brief.highlight}</span>{" "}{project.brief.after}</>
            }
          </p>
          <span
            className="inline-flex items-center gap-1 mt-4 font-medium transition-all duration-200"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem)",
              color: hovered ? "#1c1917" : "#78716c",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            Read case study
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{
                transition: "transform 200ms ease",
                transform: hovered ? "translateX(2px)" : "translateX(0)",
              }}
            >
              <path
                d="M5.25 3.5L8.75 7L5.25 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* ── Mobile/Tablet: stacked card ── */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          borderRadius: "0.75rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        <div
          onClick={handleTapBand}
          role="button"
          tabIndex={-1}
          aria-label={`${isRevealed ? "Hide" : "Show"} preview image for ${project.title}`}
          style={{ cursor: "pointer" }}
        >
          <ImageBand
            project={project}
            revealed={isRevealed}
            gradientDirection="to bottom"
            style={{
              height: "clamp(80px, 12vw, 120px)",
              borderRadius: "0.75rem 0.75rem 0 0",
            }}
          />
        </div>

        <div
          style={{
            padding: "clamp(1.25rem, 4vw, 1.75rem)",
            background: "#ffffff",
            borderRadius: "0 0 0.75rem 0.75rem",
          }}
        >
          <span
            className="block font-medium mb-1"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              color: project.bgAccent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Project {String(project.id).padStart(2, "0")}
          </span>
          <h3
            className="font-semibold leading-tight mb-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem)",
              color: "#1c1917",
            }}
          >
            {project.title}
          </h3>
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.78rem, 0.74rem + 0.2vw, 0.85rem)",
              color: "#57534e",
            }}
          >
            {typeof project.brief === "string"
              ? project.brief
              : <>{project.brief.before}{" "}<span className="text-amber-600">{project.brief.highlight}</span>{" "}{project.brief.after}</>
            }
          </p>
          <span
            className="inline-flex items-center gap-1 mt-3 font-medium"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              color: "#78716c",
            }}
          >
            Read case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5.25 3.5L8.75 7L5.25 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

/* ── Main Page ──────────────────────────────────── */

export default function ProjectsCatalog() {
  const [revealedId, setRevealedId] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2rem)",
        }}
      >
        {/* ── Breadcrumb ── */}
        <div style={{ marginBottom: "clamp(1rem, 4vw, 1rem)" }}>
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: null },
            ]}
          />
        </div>

        {/* ── Page header ── */}
        <header style={{ marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)" }}>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem)",
              fontWeight: 700,
              color: "#1c1917",
              lineHeight: 1.15,
              marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </h1>
          <p
            style={{
              fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1.05rem)",
              color: "#57534e",
              lineHeight: 1.75,
              maxWidth: "48ch",
            }}
          >
          Most portfolios show you a list of tools. This one shows you a track record of decisions.
          <span style={{ display: "block", height: "0.6em" }} />
          Every project here is a real problem I solved—and the thinking behind how I solved it. 
          <span style={{ display: "block", height: "0.6em" }} />
          <b>Read through the case files and see how my philosophy translates into production-ready solutions.</b>
          </p>
        </header>
        <div style={{ borderTop: "1px solid #e7e5e4", marginBottom: "clamp(1.25rem, 2.5vw, 2rem)", }} />

        {/* ── Project cards ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.25rem, 2.5vw, 1.75rem)",
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={handleSelect}
              revealedId={revealedId}
              onReveal={setRevealedId}
            />
          ))}
        </div>

        {/* ── Footer hint ── */}
        <div
          style={{
            marginTop: "clamp(3rem, 5vw, 4.5rem)",
            paddingTop: "1.5rem",
            borderTop: "1px solid #e7e5e4",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.65rem, 0.6rem + 0.2vw, 0.75rem)",
              color: "#a8a29e",
              letterSpacing: "0.04em",
            }}
          >
            Start with Project 01. They build on each other.
          </p>
        </div>
      </div>
    </div>
  );
}