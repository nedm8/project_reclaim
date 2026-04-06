import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 flex-wrap"
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "clamp(0.65rem, 0.6rem + 0.25vw, 0.75rem)",
        lineHeight: 1.4,
      }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span
                className="select-none"
                style={{ color: "#a8a29e" }}
                aria-hidden="true"
              >
                ›
              </span>
            )}
            {isLast || !item.to ? (
              <span
                className="font-medium"
                style={{ color: "#d97706" }}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="underline decoration-1 underline-offset-2 transition-colors duration-150"
                style={{ color: "#78716c", textDecorationColor: "#d6d3d1" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#44403c";
                  e.currentTarget.style.textDecorationColor = "#a8a29e";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#78716c";
                  e.currentTarget.style.textDecorationColor = "#d6d3d1";
                }}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}