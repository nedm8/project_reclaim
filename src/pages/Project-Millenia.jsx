import ProjectsLayout from "../layouts/ProjectsLayout";

/* ──────────────────────────────────────────────────
   Project04.jsx — When Simple Is Better Than Complex
   ────────────────────────────────────────────────── */

function ImagePlaceholder({ label = "image placeholder" }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "0.5rem",
        background: "linear-gradient(135deg, #2ea05015, #2ea05008)",
        border: "1px dashed #2ea05030",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Mono', monospace",
        fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
        color: "#2ea05080",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </div>
  );
}

export default function Project04() {
  return (
    <ProjectsLayout slug="when-simple-is-better-than-complex">
      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: "62ch" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "clamp(1.5rem, 3vw, 2.5rem)", alignItems: "center" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
          <ImagePlaceholder />
        </div>
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ImagePlaceholder />
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
          </p>
        </div>

        <div style={{ maxWidth: "62ch", marginLeft: "auto" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "clamp(1.5rem, 3vw, 2.5rem)", alignItems: "center" }}>
          <ImagePlaceholder />
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.
          </p>
        </div>
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <ImagePlaceholder />
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.
          </p>
        </div>

        <div style={{ maxWidth: "62ch" }}>
          <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)", color: "#57534e", lineHeight: 1.8 }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </div>
    </ProjectsLayout>
  );
}