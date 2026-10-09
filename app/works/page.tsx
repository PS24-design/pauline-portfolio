import Shell from "../components/Shell";

const projects = [
  {
    title: "Portfolio Design",
    type: "PROJECT #1",
    desc: "This current project that you're viewing is my first website.",
    role: "Design, development",
    tools: "Figma, Next.js",
    image: "/works/portfolio.jpg",
    href: "#",
  },
  {
    title: "LOCK IN App",
    type: "PROJECT #2",
    desc: "An App Blocker that I tried to create assisted by AI. This app is still being created.",
    role: "UI design, front-end",
    tools: "Figma, Android Studio",
    image: "/works/lock_in.jpg",
    href: "#",
  },
];

const tags = ["Interface", "Editorial", "Digital"];

export default function ProjectsPage() {
  return (
    <Shell active="works" label="MY WORKS" meta="selected works only kay pangit akoang mga prev. works :)">
      <section className="proj-head">
        <div>
          <p className="eyebrow">
            <span className="rule" /> SELECTED / 03
          </p>
          <h1 className="display">UI-Focused Creator.</h1>
          <p className="proj-lead">
            My strength is in design, layout, and organizing, and utilize AI tools
            as a coding partner to bring designs to life faster. That's how I work best.
          </p>
        </div>
        <ul className="tags">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>


      {projects.map((p, i) => (
        <article key={p.title} className={`project${i % 2 === 1 ? " reverse" : ""}`}>
          <div className="media">
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.title} />
            ) : (
              <span className="media-text">Picture {i + 1} (sample only)</span>
            )}
          </div>

          <div className="project-info">
            <p className="mono-label dim">
              0{i + 1} / 02 &nbsp; {p.type}
            </p>
            <h2>{p.title}</h2>
            <p className="desc">{p.desc}</p>

            <div className="meta-rows">
              <div className="meta-row">
                <span className="mono-label dim">ROLE</span>
                <span>{p.role}</span>
              </div>
              <div className="meta-row">
                <span className="mono-label dim">TOOLS</span>
                <span>{p.tools}</span>
              </div>
            </div>           
          </div>
        </article>
      ))}
    </Shell>
  );
}