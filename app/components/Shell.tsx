import Link from "next/link";
import type { ReactNode } from "react";

const profile = {
  name: "Pauline Sales",
  initials: "PS",
  role: "DESIGN + DEVELOPMENT",
};

const nav = [
  { key: "about", label: "About me", href: "/about", num: "01", icon: "/icons/about_me.png" },
  { key: "works", label: "My Works", href: "/works", num: "02", icon: "/icons/my_works.png" },
  { key: "contact", label: "Contact me", href: "/contact", num: "03", icon: "/icons/contact_me.png" },
] as const;

type Props = {
  active: "about" | "works" | "contact";
  label: string;
  meta: string;
  children: ReactNode;
};

export default function Shell({ active, label, meta, children }: Props) {
  const index = nav.findIndex((n) => n.key === active) + 1;

  return (
    <div className="shell">
      <aside className="side">
        <Link href="/" className="side-back">
          ← Home
        </Link>

        <div className="side-profile">
          <span className="avatar">{profile.initials}</span>
          <div>
            <p className="side-name">{profile.name}</p>
            <p className="mono-label dim">{profile.role}</p>
          </div>
        </div>

        <p className="mono-label dim">INDEX</p>
        <nav className="side-nav">
          {nav.map((n) => (
            <Link
              key={n.key}
              href={n.href}
              className={`side-link${n.key === active ? " active" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={n.icon} alt="" />
              <span>{n.label}</span>
              <span className="side-num">{n.num}</span>
            </Link>
          ))}
        </nav>

        <div className="side-foot">
          <p className="mono-label">
            <span className="dot" />
            AVAILABLE Q1 2027
          </p>
          <p className="mono-label dim">© 2026 / PORTFOLIO V1.0</p>
        </div>
      </aside>

      <div className="main">
        <div className="main-top">
          <span className="mono-label">
            0{index} / 03 <span className="rule" /> {label}
          </span>
          <span className="mono-label dim">{meta}</span>
        </div>
        <div className="main-body">{children}</div>
      </div>
    </div>
  );
}