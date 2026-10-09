import Shell from "../components/Shell";

const portrait = "/icons/about_me_profile.jpeg";

const intro =
  "I am a BSIT student who turns ideas into websites. I care about clean layouts, clear stories and details, from first sketch to final launch.";

export default function AboutPage() {
  return (
    <Shell active="about" label="ABOUT ME" meta="PROFILE / CREATIVE PRACTICE">
      <section className="about">
        <div>
          <p className="eyebrow">
            <span className="rule" /> HELLO, I&apos;M PAULINE
          </p>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="mono-label dim">intro.txt</span>
            </div>
            <p>
              {intro}
              <span className="cursor small" />
            </p>
          </div>

          <dl className="facts">
            <div>
              <dt className="mono-label">BASED</dt>
              <dd>Davao City</dd>
            </div>
            <div>
              <dt className="mono-label">FOCUS</dt>
              <dd>Design &amp; NLP</dd>
            </div>
          </dl>

          <a href="/Pauline_Sales_CV.pdf" download className="btn-accent">
            Download CV ↓
          </a>
        </div>

        <div className="portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={portrait} alt="Pauline Sales" />
          <span className="mono-label portrait-tag">PORTRAIT / 2026</span>
        </div>
      </section>
    </Shell>
  );
}