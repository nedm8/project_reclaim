import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TYPING_SPEED = 30;
const PAUSE_AFTER_TYPED = 5000;
const PAUSE_BEFORE_RESTART = 100;
const CURSOR_BLINK_RATE = 530;
const HOOK_TEXT = "Got a problem worth solving...?";

function HookAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;
    const run = () => {
      let charIndex = 0;
      const type = () => {
        charIndex++;
        setDisplayText(HOOK_TEXT.slice(0, charIndex));
        if (charIndex < HOOK_TEXT.length) {
          timeout = setTimeout(type, TYPING_SPEED);
        } else {
          timeout = setTimeout(() => {
            setDisplayText("");
            timeout = setTimeout(run, PAUSE_BEFORE_RESTART);
          }, PAUSE_AFTER_TYPED);
        }
      };
      timeout = setTimeout(type, 300);
    };
    run();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), CURSOR_BLINK_RATE);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      {displayText && (
        <span style={{
          background: "rgba(0, 0, 0, 0.04)",
          padding: "2px 4px",
          borderRadius: "2px",
        }}>
          {displayText}
        </span>
      )}
      <span style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
    </>
  );
}

const RAINBOW_GRADIENT =
  "linear-gradient(180deg, #e8593c, #ef9f27, #5dca5d, #3b8bd4, #7f77dd, #d4537e, #e8593c)";
const RAINBOW_GRADIENT_REVERSED =
  "linear-gradient(180deg, #d4537e, #7f77dd, #3b8bd4, #5dca5d, #ef9f27, #e8593c, #d4537e)";
const STRIP_HEIGHT = "1000px";

function RainbowStrip({ side = "right", direction = "up" }) {
  const posClass = side === "left" ? "left-0" : "right-0";
  const animClass = direction === "up" ? "animate-rainbow-scroll" : "animate-rainbow-scroll-down";
  const gradient = side === "left" ? RAINBOW_GRADIENT_REVERSED : RAINBOW_GRADIENT;

  return (
    <div
      className={`fixed top-0 ${posClass} bottom-0 w-1 sm:w-3 overflow-hidden z-0`}
      aria-hidden="true"
    >
      <div className={`absolute inset-0 flex flex-col ${animClass}`}>
        {[0, 1].map((i) => (
          <div key={i} className="w-full flex-shrink-0" style={{ height: STRIP_HEIGHT }}>
            <div
              className="w-full h-full opacity-70"
              style={{ background: gradient }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex items-center sm:h-[calc(100vh-120px)]">
      <RainbowStrip side="left" direction="down" />
      <RainbowStrip side="right" direction="up" />

      <div className="w-full py-2 sm:py-4">

          {/* ── TOP RIGHT META ── */}
          <div
            className="absolute top-3 sm:top-6 right-0 text-right"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(11px, 0.8vw + 4px, 12px)",
              color: "#999",
              letterSpacing: "0.04em",
              lineHeight: "clamp(1.3em, 1vw + 1em, 1.8em)",
              fontWeight: 400,
            }}
          >
            Based in the Philippines<br />
            Available for remote work
          </div>

          {/* ── HOOK (typewriter) ── */}
          <div className="mt-12 sm:mt-16">
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(14px, 2vw + 6px, 20px)",
            letterSpacing: "0.06em",
            color: "#999",
            fontWeight: 400,
            minHeight: "20px",
          }}>
            <HookAnimation />
          </p>
        </div>

        {/* ── NAME ── */}
        <div className="mt-4 sm:mt-8">
          <h1 style={{
            fontSize: "clamp(48px, 7vw, 64px)",
            fontWeight: 700,
            color: "#0a0a0a",
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
          }}>
            Ned<br />Mazaredo
          </h1>
        </div>

        {/* ── ROLE ── */}
        <div className="mt-2">
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "clamp(10px, 1.2vw + 4px, 15px)",
            color: "#777",
            letterSpacing: "clamp(0.06em, 1vw, 0.18em)",
            textTransform: "uppercase",
            fontWeight: 400,
          }}>
            Operations · AI Engineering · Systems Automation
          </p>
        </div>

        {/* ── DIVIDER ── */}
        <div className="mt-1 sm:mt-2">
          <div style={{ width: "48px", height: "1px", background: "#ccc" }} />
        </div>

        {/* ── DESCRIPTION ── */}
        <div className="mt-4 sm:mt-8">
          <p style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "clamp(12px, 1vw + 8px, 17px)",
            fontWeight: 400,
            color: "#555",
            lineHeight: 1.6,
            maxWidth: "520px",
          }}>
            I build tools and systems that make teams faster, smarter,
            and more focused on the stuff that matters.
          </p>
        </div>

        {/* ── ANCHOR STATEMENT ── */}
        <div className="mt-4 sm:mt-8 mb-2 sm:mb-4">
          <p style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(36px, 10vw, 60px)",
            fontWeight: 700,
            color: "#0a0a0a",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}>
            Let's Build Something Good.
          </p>
        </div>

{/* ── CTA BUTTONS ── */}
        <div className="flex flex-row gap-3 sm:gap-4 items-center mt-4 sm:mt-8 mb-4 sm:mb-8">
          <Link
            to="/about"
            className="inline-block px-3 sm:px-8 py-2 sm:py-3.5 rounded-md transition-colors duration-200"
            style={{
              background: "#000000",
              color: "#ffffff",
              fontSize: "clamp(14px, 1vw + 6px, 15px)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              border: "2px solid #000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fafaf8";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="inline-block px-3 sm:px-8 py-2 sm:py-3.5 rounded-md transition-colors duration-200"
            style={{
              background: "#000000",
              color: "#ffffff",
              fontSize: "clamp(14px, 1vw + 6px, 15px)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              border: "2px solid #000000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fafaf8";
              e.currentTarget.style.color = "#000000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#000000";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            View Projects
          </Link>
        </div>

      {/* ── STATUS INDICATOR ── */}
      <div
        className="absolute bottom-4 sm:bottom-10 right-0 flex items-center justify-end gap-2"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "clamp(11px, 0.8vw + 4px, 12px)",
          color: "#999",
          fontWeight: 400,
          letterSpacing: "0.04em",
        }}
      >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#22c55e" }}
          />
          Open to opportunities
        </div>

      </div>
    </section>
  );
}