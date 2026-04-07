"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({ data }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const allNavLinks = [
    { label: "About",      href: "#about",      key: "about" },
    { label: "Education",  href: "#education",  key: "education" },
    { label: "Experience", href: "#experience", key: "experience" },
    { label: "Projects",   href: "#projects",   key: "projects" },
    { label: "Skills",     href: "#skills",     key: "skills" },
    { label: "Community",  href: "#community",  key: "community" },
    { label: "Contact",    href: "#contact",    key: "email" },
  ];

  const activeLinks = allNavLinks.filter((link) => {
    if (link.label === "About") return true;
    const d = data?.[link.key];
    return Array.isArray(d) ? d.length > 0 : !!d;
  });

  const resumeSource = data?.resumeBase64 || data?.resume || data?.resumeUrl;

  useEffect(() => {
    const ids = ["hero", ...activeLinks.map((l) => l.href.replace("#", ""))];
    const onScroll = () => {
      const sorted = ids
        .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Infinity }))
        .filter((s) => s.top !== Infinity)
        .sort((a, b) => a.top - b.top);
      for (let i = sorted.length - 1; i >= 0; i--) {
        if (window.scrollY >= sorted[i].top - 160) {
          setActiveSection(sorted[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const titleWords = (data?.title || "Creative Developer").split(" ");

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside style={{
        position: "fixed", top: 0, left: 0, bottom: 0, width: "220px",
        background: "#f5f5f2",
        borderRight: "1px solid #ddddd8",
        padding: "2.5rem 2rem",
        display: "flex", flexDirection: "column",
        zIndex: 100,
        overflow: "hidden",
      }} className="hidden lg:flex">

        {/* Name */}
        <a href="#hero" onClick={(e) => go(e, "#hero")} style={{ textDecoration: "none" }}>
          <span style={{
            fontSize: "11px", fontWeight: 400,
            color: "#1a1a1a", letterSpacing: "0.04em", lineHeight: 1.4,
          }}>
            {data?.name || "Portfolio"}
          </span>
        </a>

        {/* Nav */}
        <nav style={{ marginTop: "2.2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {activeLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                style={{
                  fontSize: "9px", fontWeight: 500,
                  textTransform: "uppercase", letterSpacing: "0.22em",
                  color: isActive ? "#1a1a1a" : "#b0b0aa",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  lineHeight: 1.5,
                }}>
                {link.label}
              </a>
            );
          })}

          {resumeSource && (
            <a
              href={data?.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
              download="Resume.pdf"
              style={{
                marginTop: "0.3rem",
                fontSize: "9px", fontWeight: 500,
                textTransform: "uppercase", letterSpacing: "0.22em",
                color: "#b0b0aa", textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#b0b0aa"}
            >
              Résumé
            </a>
          )}
        </nav>

        {/* Spacer */}
        <div style={{ flex: 1, minHeight: "2rem" }} />

        {/* Large editorial title — user's job title */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{
            fontSize: "9px", fontWeight: 500, textTransform: "uppercase",
            letterSpacing: "0.22em", color: "#b0b0aa", margin: "0 0 0.8rem",
          }}>
            Portfolio
          </p>
          <div>
            {titleWords.map((word, i) => (
              <span key={i} style={{
                display: "block",
                fontSize: "clamp(1.3rem, 1.8vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                color: "#1a1a1a",
              }}>
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom links */}
        <div>
          <div style={{ height: "1px", background: "#ddddd8", marginBottom: "1.2rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <span style={{ fontSize: "8.5px", color: "#c0c0bb", letterSpacing: "0.06em", cursor: "default" }}>Privacy Policy</span>
            <span style={{ fontSize: "8.5px", color: "#c0c0bb", letterSpacing: "0.06em", cursor: "default" }}>Accessibility Statement</span>
            <span style={{ fontSize: "8.5px", color: "#c0c0bb", letterSpacing: "0.06em", marginTop: "0.4rem" }}>
              © {new Date().getFullYear()} {data?.name}
            </span>
          </div>
        </div>
      </aside>

      {/* ── Mobile header ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "#f5f5f2",
        borderBottom: "1px solid #ddddd8",
        padding: "1rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }} className="flex lg:hidden">
        <span style={{ fontSize: "11px", fontWeight: 400, color: "#1a1a1a", letterSpacing: "0.04em" }}>
          {data?.name || "Portfolio"}
        </span>
        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1a1a", padding: "4px", display: "flex" }}>
          {mobileOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed", top: "50px", left: 0, right: 0, zIndex: 99,
              background: "#f5f5f2",
              borderBottom: "1px solid #ddddd8",
              padding: "1.5rem",
              display: "flex", flexDirection: "column", gap: "1rem",
            }} className="atelier-mobile-dropdown flex lg:hidden">
            {activeLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}
                style={{
                  fontSize: "10px", fontWeight: 500, textTransform: "uppercase",
                  letterSpacing: "0.22em", color: "#1a1a1a", textDecoration: "none",
                }}>
                {link.label}
              </a>
            ))}
            {resumeSource && (
              <a
                href={data?.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : resumeSource}
                download="Resume.pdf"
                style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.22em", color: "#888880", textDecoration: "none" }}>
                Résumé
              </a>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
