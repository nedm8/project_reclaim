const PROJECTS = [
  {
    id: 1,
    slug: "when-ai-and-humans-meet",
    title: "When AI and Humans Meet",
    brief:
      "Every automation project eventually asks the same question—how much do we hand off, and how much do we keep? Here's what happens when you design with the human in mind instead of replacement.",
    color: {
      from: "rgba(220, 56, 56, 0.85)",
      to: "rgba(220, 56, 56, 0)",
    },
    bgAccent: "#dc3838",
    image: null,
  },
  {
    id: 2,
    slug: "what-seamless-integration-looks-like",
    title: "What Seamless Integration Looks Like",
    brief:
      "Integration isn't plugging apps in and hoping they'll just work—it's deciding how they should. Here's what it looks like when someone decides to orchestrate instead of just operate.",
    color: {
      from: "rgba(234, 120, 36, 0.85)",
      to: "rgba(234, 120, 36, 0)",
    },
    bgAccent: "#ea7824",
    image: null,
  },
  {
    id: 3,
    slug: "how-to-build-something-good",
    title: "How To Build Something Good",
    brief:
      "Good isn't about polish—it's about intention. Here's how self-constraint, honesty, a refusal to over-engineer, and genuine anticipation lead to things built for people that actually last.",
    color: {
      from: "rgba(202, 168, 24, 0.85)",
      to: "rgba(202, 168, 24, 0)",
    },
    bgAccent: "#caa818",
    image: null,
  },
  {
    id: 4,
    slug: "why-simple-is-sometimes-better",
    title: "Why Simple Is Sometimes Better",
    brief: {
    before: "Sometimes, the instinct is to build more:",
    highlight: "More logic + more layers = more coverage.",
    after: "But sometimes the harder call is recognizing when the problem doesn't need all that. Here's what shipping simple actually looks like.",
    },
    color: {
      from: "rgba(46, 160, 80, 0.85)",
      to: "rgba(46, 160, 80, 0)",
    },
    bgAccent: "#2ea050",
    image: null,
  },
  {
    id: 5,
    slug: "where-do-we-go-from-here",
    title: "Where Do We Go From Here",
    brief:
      "You know that there's a problem and you now know it doesn't need to be complicated... so what now?",
    color: {
      from: "rgba(79, 70, 194, 0.85)",
      to: "rgba(79, 70, 194, 0)",
    },
    bgAccent: "#4f46c2",
    image: null,
  },
];

export default PROJECTS;

/* Helpers for navigation between projects */
export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug) || null;
}

export function getProjectIndex(slug) {
  return PROJECTS.findIndex((p) => p.slug === slug);
}

export function getPrevProject(slug) {
  const idx = getProjectIndex(slug);
  return idx > 0 ? PROJECTS[idx - 1] : null;
}

export function getNextProject(slug) {
  const idx = getProjectIndex(slug);
  return idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;
}