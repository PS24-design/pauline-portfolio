import Shell from "../components/Shell";

// Edit your real details here.
const phone = "+63 9948947714";
const email = "paulinelaurice246@gmail.com";
const location = "#60 Europe St. Hillside Subd., Buhangin Pob, Davao City";

const socials = [
  { name: "GitHub", href: "https://github.com/PS24-design" },
  { name: "Figma", href: "https://www.figma.com/files/team/1632755429972627439/user/1632755428526371310?fuid=1632755428526371310" },
  { name: "Facebook", href: "https://www.facebook.com/paulinelaurice.sales"},
];

const icon = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function ContactPage() {
  return (
    <Shell active="contact" label="CONTACT ME" meta="OPEN FOR SELECT COLLABORATIONS">
      <section className="contact">
        <div className="avatar-wrap">
          <div className="contact-avatar">PS</div>
          <span className="status-dot" />
        </div>

        <p className="eyebrow">WHAT DO YOU THINK?</p>
        <h1 className="display">
          Let&rsquo;s Make It Simple
        </h1>

        <div className="info-cards">
          <div className="info-card">
            <svg {...icon}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="mono-label dim">PHONE</span>
            <span>{phone}</span>
          </div>

          <div className="info-card">
            <svg {...icon}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="mono-label dim">EMAIL</span>
            <span>{email}</span>
          </div>

          <div className="info-card">
            <svg {...icon}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="mono-label dim">LOCATION</span>
            <span>{location}</span>
          </div>
        </div>

        <div className="pills">
          {socials.map((s) => (
            <a key={s.name} href={s.href} className="pill">
              {s.name}
            </a>
          ))}
        </div>

        <p className="mono-label dim prompt-line">
          Ready to connect... <span className="cursor small" />
        </p>
      </section>
    </Shell>
  );
}