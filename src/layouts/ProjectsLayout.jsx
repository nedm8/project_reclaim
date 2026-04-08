import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import {
  getProjectBySlug,
  getPrevProject,
  getNextProject,
} from "../data/projectData";

/* ── Bottom Navigation ──────────────────────────── */

function ProjectNav({ prev, next }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        paddingTop: "clamp(2rem, 4vw, 3rem)",
        borderTop: "1px solid #e7e5e4",
        marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
      }}
    >
      {/* Previous */}
      <div style={{ flex: "1 1 0", minWidth: 0 }}>
        {prev ? (
          <Link
            to={`/projects/${prev.slug}`}
            className="group inline-flex flex-col transition-colors duration-150"
            style={{ textDecoration: "none", maxWidth: "100%" }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                prev.bgAccent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#1c1917";
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
                color: "#a8a29e",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
            >
              ← Previous
            </span>
            <span
              data-title
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.85rem, 0.8rem + 0.3vw, 1rem)",
                fontWeight: 600,
                color: "#1c1917",
                transition: "color 150ms ease",
                lineHeight: 1.3,
              }}
            >
              Project {String(prev.id).padStart(2, "0")}: {prev.title}
            </span>
          </Link>
        ) : (
          <Link
            to="/projects"
            className="inline-flex flex-col transition-colors duration-150"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#d97706";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#1c1917";
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
                color: "#a8a29e",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
            >
              ← Back
            </span>
            <span
              data-title
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.85rem, 0.8rem + 0.3vw, 1rem)",
                fontWeight: 600,
                color: "#1c1917",
                transition: "color 150ms ease",
              }}
            >
              Back to Project Catalogue
            </span>
          </Link>
        )}
      </div>

      {/* Next */}
      <div
        style={{
          flex: "1 1 0",
          minWidth: 0,
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {next ? (
          <Link
            to={`/projects/${next.slug}`}
            className="group inline-flex flex-col items-end transition-colors duration-150"
            style={{ textDecoration: "none", maxWidth: "100%" }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                next.bgAccent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#1c1917";
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
                color: "#a8a29e",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
            >
              Next →
            </span>
            <span
              data-title
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.85rem, 0.8rem + 0.3vw, 1rem)",
                fontWeight: 600,
                color: "#1c1917",
                transition: "color 150ms ease",
                lineHeight: 1.3,
                textAlign: "right",
              }}
            >
              Project {String(next.id).padStart(2, "0")}: {next.title}
            </span>
          </Link>
        ) : (
          <Link
            to="/contact"
            className="inline-flex flex-col items-end transition-colors duration-150"
            style={{ textDecoration: "none" }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#d97706";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("[data-title]").style.color =
                "#1c1917";
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
                color: "#a8a29e",
                letterSpacing: "0.04em",
                marginBottom: "0.25rem",
              }}
            >
              Next →
            </span>
            <span
              data-title
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(0.85rem, 0.8rem + 0.3vw, 1rem)",
                fontWeight: 600,
                color: "#1c1917",
                transition: "color 150ms ease",
              }}
            >
              Let's Build Something Good.
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}

/* ── Layout Component ───────────────────────────── */

export default function ProjectsLayout({ slug, children }) {
  const project = getProjectBySlug(slug);

  // Scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 guard
  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#fafaf8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        <p style={{ color: "#78716c", fontSize: "0.9rem" }}>
          Project not found.
        </p>
        <Link
          to="/projects"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "#d97706",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const prev = getPrevProject(slug);
  const next = getNextProject(slug);

  return (
    <div
      key={slug}
      style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: "'IBM Plex Sans', sans-serif",
        position: "relative",
      }}
    >
{/* ── Entrance animations ── */}
      <style>{`
        @keyframes gradientBleed {
          from {
            height: 0;
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          to {
            height: clamp(320px, 40vh, 500px);
            opacity: 1;
          }
        }
        @keyframes contentFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ── Top gradient bleed ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "clamp(320px, 40vh, 500px)",
          background: `linear-gradient(to bottom, ${project.color.from.replace("0.85", "0.12")}, transparent)`,
          pointerEvents: "none",
          zIndex: 0,
          animation: "gradientBleed 800ms ease-out forwards",
        }}
      />

      {/* ── Page container ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 4vw, 2rem)",
          animation: "contentFadeIn 600ms ease-out 300ms forwards",
          opacity: 0,
        }}
      >

        {/* ── Breadcrumb ── */}
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/projects" },
              { label: project.title, to: null },
            ]}
          />
        </div>

        {/* ── Page header ── */}
        <header style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
          <span
            className="block font-medium"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
              color: project.bgAccent,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Project {String(project.id).padStart(2, "0")}
          </span>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem)",
              fontWeight: 700,
              color: "#1c1917",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
          >
            {project.title}
          </h1>
          {typeof project.brief === "string" ? (
            <p
              style={{
                fontSize: "clamp(0.92rem, 0.86rem + 0.3vw, 1.1rem)",
                color: "#57534e",
                lineHeight: 1.7,
                maxWidth: "56ch",
              }}
            >
              {project.brief}
            </p>
          ) : (
            <p
              style={{
                fontSize: "clamp(0.92rem, 0.86rem + 0.3vw, 1.1rem)",
                color: "#57534e",
                lineHeight: 1.7,
                maxWidth: "56ch",
              }}
            >
              {project.brief.before}{" "}
              <span style={{ color: "#d97706" }}>
                {project.brief.highlight}
              </span>
              {project.brief.after}
            </p>
          )}
        </header>

        {/* ── Divider ── */}
        <div
          style={{
            width: "clamp(40px, 6vw, 64px)",
            height: "2px",
            background: project.bgAccent,
            opacity: 0.4,
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        />

        {/* ── Page-specific content ── */}
        {children}

        {/* ── Bottom navigation ── */}
        <ProjectNav prev={prev} next={next} />
      </div>
    </div>
  );
}