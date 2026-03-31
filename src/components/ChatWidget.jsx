import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const handleSubmit = async () => {
    // TODO: Wire to Cloudflare Worker endpoint
    // await fetch("https://ned-ops.dev/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsOpen(false);
      setForm({ email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 transition-all duration-200"
        style={{
          bottom: "24px",
          right: "24px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#0a0a0a",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </>
          )}
        </svg>
      </button>

      {/* Chat bubble */}
      {isOpen && (
        <div
          className="fixed z-50"
          style={{
            bottom: "88px",
            right: "24px",
            width: "clamp(300px, 90vw, 380px)",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            overflow: "hidden",
            fontFamily: "'IBM Plex Sans', sans-serif",
          }}
        >
          {/* Header */}
          <div style={{
            background: "#0a0a0a",
            padding: "16px 20px",
          }}>
            <p style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#fff",
              margin: 0,
            }}>
              Get in touch
            </p>
            <p style={{
              fontSize: "12px",
              color: "#888",
              margin: "4px 0 0",
            }}>
              I'll get back to you as soon as I can.
            </p>
          </div>

          {sent ? (
            /* Success state */
            <div style={{
              padding: "40px 20px",
              textAlign: "center",
            }}>
              <p style={{
                fontSize: "20px",
                marginBottom: "8px",
              }}>
                ✓
              </p>
              <p style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#0a0a0a",
                margin: 0,
              }}>
                Message sent
              </p>
              <p style={{
                fontSize: "13px",
                color: "#888",
                marginTop: "4px",
              }}>
                Thanks for reaching out.
              </p>
            </div>
          ) : (
            /* Form */
            <div style={{ padding: "16px 20px 20px" }}>
              <div style={{ marginBottom: "12px" }}>
                <label style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#999",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "4px",
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #e5e5e5",
                    borderRadius: "6px",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "#333",
                    background: "#fafaf8",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                />
              </div>

              <div style={{ marginBottom: "12px" }}>
                <label style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#999",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "4px",
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #e5e5e5",
                    borderRadius: "6px",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "#333",
                    background: "#fafaf8",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#999",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "4px",
                }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: "1px solid #e5e5e5",
                    borderRadius: "6px",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "#333",
                    resize: "vertical",
                    background: "#fafaf8",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                />
              </div>

              {/* Cloudflare Turnstile placeholder */}
              <div style={{
                marginBottom: "16px",
                padding: "12px",
                background: "#f5f5f3",
                borderRadius: "6px",
                fontSize: "12px",
                color: "#999",
                textAlign: "center",
              }}>
                Cloudflare Verification Placeholder (WIP)
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.email || !form.message}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: !form.email || !form.message ? "#999" : "#fff",
                  background: !form.email || !form.message ? "#e5e5e5" : "#0a0a0a",
                  border: "none",
                  borderRadius: "6px",
                  cursor: !form.email || !form.message ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
              >
                Send message
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}