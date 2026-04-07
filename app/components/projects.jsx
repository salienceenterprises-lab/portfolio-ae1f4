"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  const items = data?.projects;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="projects" style={{
      background: "#f5f5f2",
      padding: "7rem 4rem",
      borderBottom: "1px solid #ddddd8",
    }}>
      <div style={{ maxWidth: "900px" }}>
        {/* Label + rule */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <p style={{
            fontSize: "9px", textTransform: "uppercase",
            letterSpacing: "0.28em", color: "#b0b0aa", margin: "0 0 2rem",
          }}>
            Selected Work
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              style={{
                padding: "2.8rem 0",
                borderBottom: "1px solid #eeeee9",
              }}
            >
              {/* Project image */}
              {(proj.imageBase64 || proj.image) && (
                <div style={{
                  width: "100%", marginBottom: "2rem",
                  border: "1px solid #ddddd8",
                  overflow: "hidden",
                }}>
                  <img
                    src={proj.imageBase64 || proj.image}
                    alt={proj.title}
                    style={{
                      width: "100%", height: "240px",
                      objectFit: "cover", display: "block",
                    }}
                  />
                </div>
              )}

              {/* Header row */}
              <div style={{
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between", gap: "2rem",
                marginBottom: "12px",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 500,
                    color: "#c0c0bb", letterSpacing: "0.08em",
                    flexShrink: 0,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 style={{
                    fontSize: "18px", fontWeight: 600, color: "#1a1a1a",
                    margin: 0, letterSpacing: "-0.02em",
                  }}>
                    {proj.title || "Untitled Project"}
                  </h3>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#b0b0aa", transition: "color 0.2s ease", textDecoration: "none" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#b0b0aa"}>
                      <FaGithub size={14} />
                    </a>
                  )}
                  {(proj.link || proj.demo) && (
                    <a href={proj.link || proj.demo} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#b0b0aa", transition: "color 0.2s ease", textDecoration: "none" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#b0b0aa"}>
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>

              {proj.description && (
                <p style={{
                  fontSize: "13px", color: "#6a6a65",
                  lineHeight: 1.75, margin: "0 0 14px", fontWeight: 400,
                  paddingLeft: "2.5rem",
                }}>
                  {proj.description}
                </p>
              )}

              {(proj.tech || proj.stack) && (
                <div style={{
                  display: "flex", flexWrap: "wrap", gap: "6px",
                  paddingLeft: "2.5rem",
                }}>
                  {(proj.tech || proj.stack).map((t, j) => (
                    <span key={j} style={{
                      fontSize: "9.5px", fontWeight: 500,
                      padding: "3px 10px",
                      border: "1px solid #ddddd8",
                      color: "#888880", letterSpacing: "0.06em",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
