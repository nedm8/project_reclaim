import ProjectsLayout from "../layouts/ProjectsLayout";
import { useState, useEffect } from "react";
import queueFriction from "../assets/projects/p01/p01-what-zendesk-friction.png";
import handoffLoop from "../assets/projects/p01/p01-how-handoff-loop.png";

/* ──────────────────────────────────────
   Project 01 — When AI and Humans Meet
   ────────────────────────────────────── */

/* ── Shared Styles ── */
const body = {
  fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: "clamp(0.88rem, 0.82rem + 0.3vw, 1rem)",
  color: "#57534e",
  lineHeight: 1.8,
};
 
const sectionHeader = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem)",
  fontWeight: 600,
  color: "#292524",
  marginBottom: "1rem",
  letterSpacing: "-0.01em",
};
 
const sectionLabel = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "clamp(0.65rem, 0.6rem + 0.2vw, 0.72rem)",
  color: "#dc3838",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};
 
const divider = {
  border: "none",
  borderTop: "1px solid #e7e5e4",
  margin: "0",
};
 
/* ── Components ── */
 
function ImagePlaceholder({ label = "image placeholder" }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 3",
        borderRadius: "0.5rem",
        background: "linear-gradient(135deg, #dc383815, #dc383808)",
        border: "1px dashed #dc383830",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Mono', monospace",
        fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
        color: "#dc383880",
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </div>
  );
}
 
function SectionLabel({ children }) {
  return <p style={sectionLabel}>{children}</p>;
}
 
function SectionTitle({ children }) {
  return <h2 style={sectionHeader}>{children}</h2>;
}
 
function Paragraph({ children, style: extra = {} }) {
  return <p style={{ ...body, ...extra }}>{children}</p>;
}
 
function Spacer() {
  return <div style={{ height: "0.6rem" }} />;
}
 
function TwoColumn({ left, right, imageLeft = false }) {
  const textContent = imageLeft ? right : left;
  const imageContent = imageLeft ? left : right;

  return (
    <>
      {/* Desktop: side by side */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
          alignItems: "start",
        }}
      >
        {imageLeft ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>

      {/* Mobile: text first, image below */}
      <div className="flex flex-col gap-5 md:hidden">
        {textContent}
        {imageContent}
      </div>
    </>
  );
}
 
function FAQItem({ question, children, isLast = false, id, onOpen }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!open && onOpen) onOpen(id);
    setOpen(!open);
  };

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid #e7e5e4" }}>
      <button
        onClick={handleClick}
        style={{
          width: "100%",
          padding: "1rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.85rem, 0.8rem + 0.25vw, 0.95rem)",
            fontWeight: 500,
            color: "#292524",
            lineHeight: 1.5,
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.85rem",
            color: "#dc3838",
            flexShrink: 0,
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? "400px" : "0px",
          transition: "max-height 0.7s ease",
        }}
      >
        <div
          style={{
            paddingBottom: "1rem",
            paddingLeft: "1rem",
            borderLeft: "2px solid #e7e5e4",
            marginLeft: "0.25rem",
            marginTop: "0.5rem",
            marginBottom: "0.75rem",
            ...body,
            fontSize: "clamp(0.82rem, 0.78rem + 0.2vw, 0.9rem)",
            color: "#78716c",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
 
/* ── Priority Table ── */
function PriorityTable() {
  const tiers = [
    {
      level: "P0",
      label: "Info Retrieval",
      description: "Order status, tracking, account details",
      ai: "Pulls and formats data",
      human: "Reviews and sends",
    },
    {
      level: "P1",
      label: "Contextual Support",
      description: "Product questions, recommendations, sales inquiries",
      ai: "Drafts personalized response",
      human: "Adjusts tone, sends",
    },
    {
      level: "P2",
      label: "Judgment Call",
      description: "Refunds, order changes, de-escalation",
      ai: "Prepares context and approach",
      human: "Makes the call, edits, sends",
    },
    {
      level: "P3",
      label: "Management",
      description: "Escalations, legal, fraud, high-emotion",
      ai: "Flags and routes only",
      human: "Full human handling",
    },
  ];
 
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: "clamp(0.75rem, 0.7rem + 0.2vw, 0.85rem)",
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: "2px solid #dc383830",
              textAlign: "left",
            }}
          >
            {["Tier", "Type", "AI Role", "Human Role"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "0.6rem 0.75rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "clamp(0.6rem, 0.55rem + 0.2vw, 0.7rem)",
                  color: "#dc3838",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tiers.map((t) => (
            <tr
              key={t.level}
              style={{ borderBottom: "1px solid #e7e5e4" }}
            >
              <td
                style={{
                  padding: "0.6rem 0.75rem",
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: 600,
                  color: "#292524",
                }}
              >
                {t.level}
              </td>
              <td style={{ padding: "0.6rem 0.75rem", color: "#57534e" }}>
                <span style={{ fontWeight: 500, color: "#292524" }}>
                  {t.label}
                </span>
                <br />
                <span style={{ fontSize: "0.78em", color: "#78716c" }}>
                  {t.description}
                </span>
              </td>
              <td style={{ padding: "0.6rem 0.75rem", color: "#57534e" }}>
                {t.ai}
              </td>
              <td style={{ padding: "0.6rem 0.75rem", color: "#57534e" }}>
                {t.human}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
/* ── Main Page ── */
export default function Project01() {

  /* Typewriter Footnote */
  const [openedFaqs, setOpenedFaqs] = useState(new Set());
  const [phase, setPhase] = useState(0);
  const [footnoteText, setFootnoteText] = useState("Read the whole Project 01 case file before proceeding...");
  const [isItalic, setIsItalic] = useState(true);
  const totalFaqs = 9;
  const allOpened = openedFaqs.size >= totalFaqs;
  const line2 = "Now you understand my philosophy behind every system. Up next. What seamless integration looks like...";

  useEffect(() => {
    if (allOpened && phase === 0) {
      const delay = setTimeout(() => setPhase(1), 3000);
      return () => clearTimeout(delay);
    }
  }, [allOpened]);

  useEffect(() => {
    if (phase === 1) {
      const eraseText = "Read the whole Project 01 case file before proceeding...";
      let i = eraseText.length;

      const eraseInterval = setInterval(() => {
        i--;
        setFootnoteText(eraseText.slice(0, i));
        if (i <= 0) {
          clearInterval(eraseInterval);
          setIsItalic(false);
          setPhase(2);
        }
      }, 20);

      return () => clearInterval(eraseInterval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 2) {
      let i = 0;
      const typeInterval = setInterval(() => {
        i++;
        setFootnoteText(line2.slice(0, i));
        if (i >= line2.length) clearInterval(typeInterval);
      }, 30);
      return () => clearInterval(typeInterval);
    }
  }, [phase]);


  return (
    <ProjectsLayout slug="when-ai-and-humans-meet">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1.5rem, 3vw, 2.5rem)",
        }}
      >
        {/* ═══════════════════════════════════
            INTRODUCTION
            ═══════════════════════════════════ */}
        <div style={{ maxWidth: "72ch" }}>
          <SectionLabel>Introduction</SectionLabel>
          <SectionTitle>
            AI is not the hero of this story. Neither are humans.
          </SectionTitle>
          <Paragraph>
            Around afternoon, you could feel the shift. Replies get a little
            shorter. Tabs stay open a little longer. Someone double-checks an
            order, then checks it again—not because they didn't know what they
            were doing, but because the work demanded that level of attention
            for every single ticket.
          </Paragraph>
          <Spacer />
          <Paragraph>
            Nothing was broken. The team was good. But the system they were
            working in made consistency harder than it needed to be.
          </Paragraph>
          <Spacer />
          <Paragraph>
            This is a story about building the bridge between AI and the people
            who do the work—not with a flashy product or a six-figure platform,
            but with a chat bot, a PDF file, and a deep understanding of how
            people actually work.
          </Paragraph>
        </div>
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            WHAT — THE PROBLEM
            ═══════════════════════════════════ */}
        <TwoColumn
          left={
            <div>
              <SectionLabel>What — The Problem</SectionLabel>
              <SectionTitle>
                Fast doesn't help if accurate doesn't follow.
              </SectionTitle>
              <Paragraph>
                Humans are slow. They miss things. They get tired by afternoon and
                pull the wrong order. AI is fast, consistent, and doesn't need
                coffee—but it doesn't know when a customer is one bad reply
                away from posting a one-star review everywhere they can.
              </Paragraph>
              <Spacer />
              <Paragraph>
                The friction between AI and human workflows isn't a technology
                problem. It's a translation problem. AI thinks in logic. Humans
                think in context, tone, and gut-feeling. Most companies pick a
                side. We wanted the best of both worlds—speed & consistency and
                judgment & empathy—without asking either to pretend to be the other.
              </Paragraph>
            </div>
          }
          right={
            <figure style={{ margin: 0 }}>
              <img
                src={queueFriction}
                alt="Zendesk ticket queue with security verification blocking workflow"
                style={{
                  width: "100%",
                  borderRadius: "0.5rem",
                }}
              />
              <figcaption
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem)",
                  color: "#78716c",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontStyle: "italic" }}>Figure 1.</span>{" "}
                Pending 4.7k Zendesk ticket queue and slow loading store platform
              </figcaption>
            </figure>
          }
        />
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            WHO — THE PEOPLE
            ═══════════════════════════════════ */}
        <div style={{ maxWidth: "72ch" }}>
          <SectionLabel>Who — The People</SectionLabel>
          <SectionTitle>Everyone felt it differently.</SectionTitle>
          <Paragraph>
            The CS agents felt it most. Every ticket meant opening the ERP—then
            waiting. Then the sales platform—another delay. Then finding the
            order, cross-checking details, confirming policy in the group chat,
            and only then starting the actual reply. By the time you reached
            the reply box, you weren't just answering a customer—you were
            recovering from the process of getting there.
          </Paragraph>
          <Spacer />
          <Paragraph>
            Customers never saw that side. They just felt the difference
            between someone who understood their situation and someone guessing
            their way through it.
          </Paragraph>
          <Spacer />
          <Paragraph>
            For operations, the problem was quieter. Knowledge lived in people,
            not systems. Strong agents carried more than their share. When they
            were out, the gaps were immediate.
          </Paragraph>
        </div>
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            WHEN/WHERE — THE SETTING
            ═══════════════════════════════════ */}
        <TwoColumn
          imageLeft
          left={<ImagePlaceholder label="Chat Actual Sample" />}
          right={
            <div>
              <SectionLabel>When &amp; Where — The Setting</SectionLabel>
              <SectionTitle>
                I built it where the team already was.
              </SectionTitle>
              <Paragraph>
                To understand the problem, I sat with the CS team and worked
                tickets the way they did. I felt the tab-switching, the delays,
                the small mental resets between systems. That's how I realized
                introducing a new platform would've added to the friction, not
                reduced it.
              </Paragraph>
              <Spacer />
              <Paragraph>
                So I built the system inside their existing chat
                platform—where the team already spent their day coordinating
                work and sharing updates. It didn't feel like a new tool. It
                felt like extending something familiar.
              </Paragraph>
              <Spacer />
              <Paragraph>
                Underneath that simplicity, we kept things structured: unique
                credentials per agent, scoped functions, logged interactions.
                From the outside, it stayed simple. From the inside, it was
                accountable.
              </Paragraph>
            </div>
          }
        />
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            HOW — THE SYSTEM
            ═══════════════════════════════════ */}
        <div style={{ maxWidth: "72ch" }}>
          <SectionLabel>How — The System</SectionLabel>
          <SectionTitle>
            The agent never starts from zero, and never loses the final say.
          </SectionTitle>
          <Paragraph>
            A ticket comes in. Before the agent starts digging, the system
            pulls order data, surfaces the relevant history, summarizes the
            issue, and flags what's missing. Then it drafts a reply using the
            team's own language—the tone they've built over time, not something
            generic.
          </Paragraph>
          <Spacer />
          <Paragraph>
            The agent reads through it, adjusts where needed, and sends.
            Sometimes the changes are small—a softer opening, a clearer
            explanation. Other times, the draft is just a starting point. But
            the agent always decides what the customer actually receives.
          </Paragraph>
        </div>
 
        {/* Workflow Diagram */}
        <figure style={{ margin: "0 auto", maxWidth: "540px" }}>
          <img
            src={handoffLoop}
            alt="AI-human handoff loop diagram showing agent workflow, AI processing, and credential logging"
            style={{
              width: "100%",
              borderRadius: "0.5rem",
            }}
          />
          <figcaption
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem)",
              color: "#78716c",
              marginTop: "0.5rem",
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontStyle: "italic" }}>Figure 2.</span>{" "}
            AI-Human Handoff Loop With Credential Logging and Audit Trail
          </figcaption>
        </figure>

        {/* Priority Table */}
        <div style={{ maxWidth: "72ch" }}>
          <Paragraph>
            Not every ticket needs the same level of attention, so we made that
            explicit. The priority system defines how much the AI handles
            versus how much the human leads—refer to the table below:
          </Paragraph>
          <Spacer />
          <figure style={{ margin: 0 }}>
            <figcaption
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem)",
                color: "#78716c",
                marginBottom: "0.5rem",
                lineHeight: 1.5,
              }}
            >
              <span style={{ fontStyle: "italic" }}>Table 1.</span>{" "}
              Priority tier system for different designated AI-Human intervention levels
            </figcaption>
            <PriorityTable />
          </figure>
        </div>
 
        {/* Backend Systems */}
        <div style={{ maxWidth: "72ch" }}>
          <Paragraph>
            Alongside the priority tiers, each ticket comes with a checklist
            and reference links—giving agents a quick verification path and a
            fallback when systems aren't cooperating. On the backend, every
            interaction is tied to the agent's credentials. Logs feed into the
            performance tracker so team leads and QA can review not just the
            resolution, but the process behind it.
          </Paragraph>
          <Spacer />
          <Paragraph>
            The CS framework—the document that defines tone, policy, and
            approach—lives as a shared PDF. When it updates, the system
            reflects the changes automatically. No rollout, no retraining
            sessions.
          </Paragraph>
        </div>
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            CONCLUSION
            ═══════════════════════════════════ */}
        <div style={{ maxWidth: "72ch" }}>
          <SectionLabel>Conclusion</SectionLabel>
          <SectionTitle>
            The value came from fitting into what was already there.
          </SectionTitle>
          <Paragraph>
            The end result isn't a fully automated system, and it's not meant
            to be. It's a setup where the repetitive parts of the work fade
            into the background, and the parts that require judgment stay
            exactly where they should be—with the person doing the job.
          </Paragraph>
          <Spacer />
          <Paragraph>
            Nothing about it is overly complex. Most of it was built from
            constraints. But that's also the point. Sometimes it's a systems
            problem, not a tools problem—and the best solutions don't add
            more. They fit into what's already there, and quietly make it
            better.
          </Paragraph>
        </div>
 
        <hr style={divider} />
 
        {/* ═══════════════════════════════════
            FAQs
            ═══════════════════════════════════ */}
        <div style={{ maxWidth: "72ch" }}>
          <SectionLabel>FAQ</SectionLabel>
          <SectionTitle>Questions worth asking.</SectionTitle>
 
          <div style={{ borderTop: "1px solid #e7e5e4" }}>
            <FAQItem question="Why not just automate everything?"
              id={0}
              onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}
            > 
              Because if the automation goes down, the entire operation goes
              with it. Full automation is a single point of failure dressed up
              as efficiency. There's also the hallucination risk—AI can
              generate confident, wrong answers. That's why a human reviews
              every response before it sends, and why account-level actions
              stay in human hands. Automation should make people better at
              their jobs, not make their jobs disappear.
            </FAQItem>
 
            <FAQItem question="Why build inside a chat platform instead of a custom interface?" id={1} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}>
              Three reasons. First, platform limitations made a dedicated
              interface impractical at the time—constraints I turned into a
              design feature rather than fighting. Second, a new interface
              means training, resistance, and a learning curve that slows
              everything down. Third, we wanted agents to feel empowered, not
              surveilled. Building natively inside their existing workspace
              meant the AI showed up as a teammate, not an overlord.
            </FAQItem>

            <FAQItem question="Can you build a custom interface?"
              id={2}
              onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}
            >
            Yes—but whether I should is a different question. Part of the
            role of an architect is knowing when a custom interface serves
            the stakeholders and when it just adds complexity. In this case,
            building inside an existing platform was the right call. But
            scoping, designing, and commissioning a dedicated interface when
            the situation calls for it? That's part of the job too.
            </FAQItem>

            <FAQItem question="Why Claude as the AI model?" id={3} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}>
              Accuracy, security, flexibility, and cost-effectiveness are the 
              primary considerations. Claude doesn't train on user input unless 
              explicitly allowed. That matters when you're processing customer data. 
              Responsible AI use isn't a talking point here. It's a design 
              constraint that shaped every decision in the system.
            </FAQItem>
 
            <FAQItem question="What about data privacy?"
              id={4}
              onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}
            >
              Choosing the right AI model was just the starting point. On top of
              Claude's own data policies, I hardcoded limitations on what data
              the AI would receive—sensitive information is redacted before it
              ever enters the system. Customer data is processed for the
              immediate task and not retained. Security wasn't an
              afterthought—it was engineered at every layer of the stack.
            </FAQItem>

            <FAQItem question="How do you handle edge cases the AI hasn't seen before?" id={5} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}>
              That's what the priority system is for. P2 and P3 tickets are
              defined by their need for human judgment—de-escalation, emotional
              reads, legal concerns, fraud. The AI doesn't try to handle what
              it can't. It flags, provides context, and steps aside. Edge cases
              that become patterns get written into the CS framework, so the
              system learns through human curation, not just model training.
            </FAQItem>
 
            <FAQItem question="What happens when a new agent joins?" id={6} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}>
              The same thing that happened to me. They start manual. Every new
              agent learns the fundamentals first—pulling data, reading
              tickets, drafting responses from scratch, navigating the
              policies. That's how I was trained when I immersed in the team,
              and it's how everyone else starts too. The AI tools come later,
              once they've built the muscle memory. You can't meaningfully
              review an AI's work if you don't understand the work yourself.
            </FAQItem>
 
            <FAQItem question="How do you know if agents are over-relying on the AI or not using it effectively?" id={7} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))}>
              The credential and logging system tracks every AI-assisted
              interaction per agent. Team leads and QA can also see the AI's
              original suggestion versus what the agent actually sent. If
              someone is rubber-stamping drafts without meaningful review, it
              shows up in the logs. It's not surveillance—it's the same
              performance visibility any well-run team needs, extended to
              include AI-assisted work.
            </FAQItem>
 
            <FAQItem question="How portable is this design?" id={8} onOpen={(id) => setOpenedFaqs(prev => new Set(prev).add(id))} isLast>
              I admit. The current implementation is scrappy—built with the tools and
              constraints we had, not an enterprise budget. But the system
              design—priority tiers, credential-based tracking,
              human-in-the-loop architecture, living framework document—none
              of that is platform-dependent. Sometimes it's a systems problem,
              not a tools problem. The best operations work knows how to build
              something that works now and scales later, because you understand
              the principles underneath the platforms.
            </FAQItem>
          </div>
        </div>
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(0.65rem, 0.6rem + 0.2vw, 0.72rem)",
            color: "#a8a29e",
            letterSpacing: "0.04em",
            lineHeight: 1.6,
            minHeight: "1.5em",
            fontStyle: isItalic ? "italic" : "normal",
            background: "#f5f5f0",
            padding: "0.75rem 1rem",
            borderRadius: "0.375rem",
            border: "1px solid #e7e5e4",
          }}
        >
          {footnoteText}
          <span
            style={{
              borderRight: "2px solid #a8a29e",
              animation: "blink 0.8s step-end infinite",
              marginLeft: "1px",
            }}
          />
        </p>
      </div>
    </ProjectsLayout>
  );
}
