"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioHero({ data }) {
  const hasPhoto = !!data?.heroImageBase64;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      height: "100vh",
      background: "#eeede9",
      position: "relative",
      overflow: "hidden",
    }}>
      {hasPhoto ? (
        /* ── Photo hero ── */
        <div style={{
          width: "100%", height: "100%",
          padding: "1rem",
          boxSizing: "border-box",
          position: "relative",
        }}>
          <div style={{
            width: "100%", height: "100%",
            border: "1px solid rgba(0,0,0,0.1)",
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src={data.heroImageBase64}
              alt={data.name || "Hero"}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
            {/* Bottom overlay with name */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
              pointerEvents: "none",
            }} />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem" }}
            >
              <p style={{
                fontSize: "9px", textTransform: "uppercase",
                letterSpacing: "0.28em", color: "rgba(255,255,255,0.6)",
                margin: "0 0 6px",
              }}>
                {data?.title || "Developer"}
              </p>
              <h1 style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700,
                letterSpacing: "-0.03em", lineHeight: 1.05,
                color: "rgba(255,255,255,0.95)", margin: 0,
              }}>
                {data?.name}
              </h1>
            </motion.div>
          </div>
        </div>
      ) : (
        /* ── Type-only hero (no photo) ── */
        <div style={{
          width: "calc(100% - 2rem)",
          height: "calc(100% - 2rem)",
          margin: "1rem",
          border: "1px solid #ddddd8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "3.5rem",
          boxSizing: "border-box",
          position: "relative",
        }}>
          {/* Light grid texture */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <p style={{
              fontSize: "9px", textTransform: "uppercase",
              letterSpacing: "0.28em", color: "#b0b0aa",
              margin: "0 0 1.5rem",
            }}>
              {data?.title || "Portfolio"}
            </p>
            <h1 style={{ margin: 0, lineHeight: 0.88 }}>
              {(data?.name || "Portfolio").split(" ").map((word, i) => (
                <span key={i} style={{
                  display: "block",
                  fontSize: "clamp(3.5rem, 8vw, 8rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  color: "#1a1a1a",
                }}>
                  {word}
                </span>
              ))}
            </h1>

            {data?.sloganHeroSection && (
              <p style={{
                marginTop: "2.5rem",
                fontSize: "14px", fontWeight: 400,
                color: "#888880", lineHeight: 1.7,
                maxWidth: "480px",
              }}>
                {data.sloganHeroSection}
              </p>
            )}

            <button
              onClick={() => scrollTo("about")}
              style={{
                marginTop: "3rem",
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "none", border: "1px solid #1a1a1a",
                padding: "10px 24px",
                fontSize: "9px", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.22em",
                color: "#1a1a1a", cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#f5f5f2"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1a1a1a"; }}
            >
              View Work
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
