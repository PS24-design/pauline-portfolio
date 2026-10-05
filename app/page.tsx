import Link from "next/link";

// Edit these to make the site yours.
const profile = {
  siteName: "pauline_24",
  name: "PAULINE SALES",
  roles: { first: "designer", second: "<developer/>" },
  tagline: "Turning ideas into websites",
};

// Use the same icon paths as in your app/menu/page.tsx
const options = [
  {
    title: "About me",
    info: "My work psreferences",
    icon: "/icons/about_me.png",
    href: "/about",
  },
  {
    title: "My Works",
    info: "Things I've designed initially",
    icon: "/icons/my_works.png",
    href: "/works",
  },
  {
    title: "Contacts",
    info: "Want to work together?",
    icon: "/icons/contact_me.png",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <main className="screen home">
      <div className="hero-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/title_profile.jpeg" alt="Pauline" />
      </div>

      <header className="topbar">
        <span className="logo">{profile.siteName}</span>
      </header>

      <section className="hero-body">
        <h1 className="hero-name">{profile.name}</h1>
        <h2 className="hero-role">
          Future <strong>{profile.roles.first}</strong> &amp;{" "}
          <span className="role">{profile.roles.second}</span>
        </h2>
        <h3 className="hero-tagline">{profile.tagline}</h3>
      </section>

      <nav className="home-options">
        {options.map((o) => (
          <Link key={o.title} href={o.href} className="home-option">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={o.icon} alt="" />
            <h2>{o.title}</h2>
            <p>{o.info}</p>
          </Link>
        ))}
      </nav>
    </main>
  );
}