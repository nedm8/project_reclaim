import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {

  useEffect(() => {
    document.title = "Ned-Ops — About";
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <style>{`
        .about-image {
          float: right;
          margin-left: clamp(16px, 2.5vw, 32px);
          margin-bottom: 12px;
          width: clamp(160px, 22vw, 260px);
        }
        @media (max-width: 400px) {
          .about-image {
            float: none;
            width: clamp(160px, 65vw, 220px);
            margin: 0 auto 16px;
            display: block;
          }
        }
      `}</style>

      <div
        style={{
          padding: "clamp(16px, 2vw, 32px) 0",
          minHeight: "calc(100vh - 128px)",
        }}
      >

        {/* Heading */}
        <div style={{ marginBottom: "12px" }}>
          <p style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#999",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            About
          </p>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#0a0a0a",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            margin: 0,
          }}>
            Ned Mazaredo
          </h1>
          <p style={{
            fontSize: "15px",
            color: "#888",
            marginTop: "4px",
            fontWeight: 400,
          }}>
            Operations · AI Engineering · Systems Automation
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "40px", height: "1px", background: "#ddd", marginBottom: "14px" }} />

        {/* Float container */}
        <div style={{ overflow: "hidden" }}>

          {/* Image — floated right on desktop, centered on mobile */}
          <div className="about-image">
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                background: "#f3f3f3",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#bbb",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              IMAGE
            </div>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.7,
            fontWeight: 400,
            marginBottom: "12px",
            marginTop: 0,
          }}>
            Hi there! I'm Ned. I build systems that get out of the way so people
            can do the work that actually matters.
          </p>

          <p style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.7,
            fontWeight: 400,
            marginBottom: "12px",
            marginTop: 0,
          }}>
            From ticket pipelines to AI workflows, I've spent my time at a lean
            e-commerce startup taking ideas from zero to production. Working across
            CS, IT, and Marketing—often without a dedicated engineering budget—taught
            me one thing: the best systems aren't just logical; they're empathetic.
          </p>

          <p style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.7,
            fontWeight: 400,
            marginBottom: "12px",
            marginTop: 0,
          }}>
            With a background in Statistics, my instinct is to model
            everything—flow, failure points, and the edge cases nobody thought to
            ask about. I live for that quiet
            satisfaction of realizing a "new" problem was actually solved by a
            system I built months ago. To me, that's the ultimate goal: making the
            future predictable so the team can stay creative.
          </p>

          <p style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.7,
            fontWeight: 400,
            marginBottom: "12px",
            marginTop: 0,
          }}>
            I care deeply about the human side of tech. Most things break not
            because the logic is flawed, but because the user experience is. I
            start by observing how people actually work—where they hesitate, what
            they ignore—and build outward from there.
          </p>

          {/* Off the clock */}
          <p style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#999",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
            marginTop: "16px",
          }}>
            When I'm not building things
          </p>

          <div style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.7,
            marginBottom: "12px",
          }}>
            <p style={{ marginTop: 0, marginBottom: "6px" }}>
              <span style={{ fontWeight: 600, color: "#444" }}>Building & Iterating:</span>{" "}
              I'm drawn to systems-heavy games like modded Minecraft or Stardew
              Valley—anywhere I can optimize a layout.
            </p>
            <p style={{ marginTop: 0, marginBottom: "6px" }}>
              <span style={{ fontWeight: 600, color: "#444" }}>Staying Grounded:</span>{" "}
              I share my life with a very energetic corgi who ensures I spend as
              much time outside as I do behind a screen.
            </p>
            <p style={{ marginTop: 0, marginBottom: "6px" }}>
              <span style={{ fontWeight: 600, color: "#444" }}>The Dreamer:</span>{" "}
              My best solutions usually come to me while I'm asleep—I've learned
              to keep a notepad by the bed.
            </p>
          </div>

          <p style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.7,
            fontWeight: 400,
            marginBottom: "12px",
            marginTop: 0,
          }}>
            My background in theater ended up being surprisingly relevant to my
            technical work. It taught me how to hold a room, stay scrappy under
            pressure, and follow through when the curtain goes up.
          </p>

          <p style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.7,
            fontWeight: 400,
            fontStyle: "italic",
            marginBottom: "20px",
            marginTop: 0,
          }}>
            If any of that sounds like your kind of weird, let's talk.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#fff",
                background: "#0a0a0a",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Get in touch
            </Link>
            <Link
              to="/resume"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#555",
                textDecoration: "none",
                borderBottom: "1px solid #ddd",
                paddingBottom: "2px",
              }}
            >
              View resume →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}