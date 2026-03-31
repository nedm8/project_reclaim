export default function About() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "clamp(24px, 4vw, 60px)",
          padding: "clamp(24px, 3vw, 48px) 0",
          minHeight: "calc(100vh - 128px)",
        }}
      >
        {/* ── LEFT COLUMN ─────────────────────── */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>

          {/* Heading */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#999",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "12px",
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
              marginTop: "6px",
              fontWeight: 400,
            }}>
              Operations · AI Engineering · Systems Automation
            </p>
          </div>

          {/* Divider */}
          <div style={{ width: "40px", height: "1px", background: "#ddd", marginBottom: "16px" }} />

          {/* Bio */}
          <div style={{ maxWidth: "520px", marginBottom: "16px" }}>
            <p style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: 1.75,
              fontWeight: 400,
              margin: 0,
            }}>
            I build AI-powered tools and operational systems—the kind that actually
            get used. Ticket pipelines, inventory systems, automation workflows: I've
            taken these from zero to production at a lean e-commerce startup, coordinating
            across CS, IT, and Marketing with no dedicated engineering team — just
            resourcefulness and finding the right people.
            </p>
          </div>

          <div style={{ maxWidth: "520px", marginBottom: "20px" }}>
            <p style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: 1.75,
              fontWeight: 400,
              margin: 0,
            }}>
            Before that, I trained teams, redesigned onboarding curricula, and handled
            procurement for an Australian IT retailer. I studied Statistics at UP
            Diliman, so analytical thinking has been baked into how I work ever since.
            </p>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: "6px" }}>
            <p style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#aaa",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Stack
            </p>
          </div>

          <div style={{ maxWidth: "520px", marginBottom: "16px" }}>
            <p style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: 1.85,
              margin: 0,
            }}>
              Claude API · OpenAI API · REST API · GraphQL · Make (Integromat) ·
              Google Apps Script · R · Prompt Engineering · API Cost Modeling
            </p>
          </div>

          {/* Platforms */}
          <div style={{ marginBottom: "6px" }}>
            <p style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#aaa",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Platforms
            </p>
          </div>

          <div style={{ maxWidth: "520px", marginBottom: "20px" }}>
            <p style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: 1.85,
              margin: 0,
            }}>
              Shopify · WooCommerce · Amazon Seller · Zendesk · Odoo/OpenERP ·
              Notion · Asana · Slack · Telegram · Google Workspace · Microsoft Teams
            </p>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a
              href="mailto:ned@ned-ops.dev"
              style={{
                display: "inline-block",
                fontSize: "14px",
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
            </a>
            <a
              href="/resume"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#555",
                textDecoration: "none",
                borderBottom: "1px solid #ddd",
                paddingBottom: "2px",
              }}
            >
              View resume →
            </a>
          </div>

        </div>

        {/* ── RIGHT COLUMN (image slot) ─────────── */}
        <div
          style={{
            flexShrink: 0,
            width: "clamp(200px, 28vw, 320px)",
            alignSelf: "flex-start",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "3 / 4",
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

      </div>
    </div>
  );
}