import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [error, setError] = useState("");
  const turnstileRef = useRef(null);

useEffect(() => {
    if (!isOpen || !turnstileRef.current) return;

    let widgetId;
    const renderWidget = () => {
      if (window.turnstile) {
        widgetId = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACzGHF4N6q0BPlGt",
          callback: (token) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(null),
        });
      } else {
        setTimeout(renderWidget, 200);
      }
    };

    renderWidget();

    return () => {
      if (widgetId !== undefined && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [isOpen]);

  const handleSubmit = async () => {
    if (!form.email) {
      setError("Email is required so I can get back to you.");
      return;
    }
    if (!turnstileToken) return;

    try {
      const res = await fetch("https://webcontact-form.ned-m.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, token: turnstileToken }),
      });

      if (!res.ok) {
        setError("Something went wrong. Try again.");
        return;
      }
    } catch {
      setError("Something went wrong. Try again.");
      return;
    }

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsOpen(false);
      setForm({ email: "", subject: "", message: "" });
      setTurnstileToken(null);
      setError("");
    }, 3000);
  };

  const canSubmit = form.email && form.message && turnstileToken;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 transition-all duration-200"
        style={{
          bottom: "24px",
          right: "24px",
          width: "clamp(52px, 4vw, 64px)",
          height: "clamp(52px, 4vw, 64px)",
          borderRadius: "50%",
          background: "linear-gradient(90deg, #3533cd, #7674f1)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 16px rgba(53, 51, 205, 0.35)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "linear-gradient(90deg, #12124a, #4a48e0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(53, 51, 205, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "linear-gradient(90deg, #3533cd, #7674f1)";
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(53, 51, 205, 0.35)";
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
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
            background: "linear-gradient(90deg, #0a0a37, #3533cd)",
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
              color: "rgba(255,255,255,0.5)",
              margin: "4px 0 0",
            }}>
              I'll get back to you as soon as I can.
            </p>
          </div>

          {sent ? (
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
                  Email <span style={{ color: "#e53e3e" }}>*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    setError("");
                  }}
                  placeholder="you@company.com"
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    fontSize: "14px",
                    border: `1px solid ${error ? '#e53e3e' : '#e5e5e5'}`,
                    borderRadius: "6px",
                    outline: "none",
                    fontFamily: "inherit",
                    color: "#333",
                    background: "#fafaf8",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3533cd")}
                  onBlur={(e) => (e.target.style.borderColor = error && !form.email ? "#e53e3e" : "#e5e5e5")}
                />
                {error && (
                  <p style={{ fontSize: "11px", color: "#e53e3e", marginTop: "4px" }}>{error}</p>
                )}
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
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3533cd")}
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
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What's your message?"
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
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#3533cd")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                />
              </div>

              {/* Turnstile */}
              <div ref={turnstileRef} style={{ marginBottom: "12px" }} />

              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: !canSubmit ? "#999" : "#fff",
                  background: !canSubmit ? "#e5e5e5" : "linear-gradient(90deg, #0a0a37, #3533cd)",
                  border: "none",
                  borderRadius: "6px",
                  cursor: !canSubmit ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
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