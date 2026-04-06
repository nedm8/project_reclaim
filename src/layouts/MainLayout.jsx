import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

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

export default function MainLayout({ locked = false }) {
  const location = useLocation();

  return (
    <div
      className="flex flex-col"
      style={{
        background: "#fafaf8",
        height: locked ? "100vh" : undefined,
        minHeight: locked ? undefined : "100vh",
        overflow: locked ? "hidden" : undefined,
      }}
    >
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <RainbowStrip side="left" direction="down" />
      <RainbowStrip side="right" direction="up" />
      <Header />
      <main
        className="flex-1"
        style={{
          overflow: locked ? "hidden" : undefined,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          key={location.pathname}
          className="max-w-7xl mx-auto w-full px-8 sm:px-16 lg:px-24"
          style={{
            borderLeft: "1px solid rgba(0,0,0,0.06)",
            borderRight: "1px solid rgba(0,0,0,0.06)",
            flex: locked ? "1 1 0" : undefined,
            overflow: locked ? "hidden" : undefined,
            animation: "pageFadeIn 500ms ease-out forwards",
            opacity: 0,
          }}
        >
          <Outlet />
        </div>
      </main>
      {!locked && <Footer />}
      <ChatWidget />
    </div>
  );
}