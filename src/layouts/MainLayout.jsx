import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function MainLayout({ locked = false }) {
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
          className="max-w-7xl mx-auto w-full px-8 sm:px-16 lg:px-24"
          style={{
            borderLeft: "1px solid rgba(0,0,0,0.06)",
            borderRight: "1px solid rgba(0,0,0,0.06)",
            flex: locked ? "1 1 0" : undefined,
            overflow: locked ? "hidden" : undefined,
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