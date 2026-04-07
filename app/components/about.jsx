"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function PortfolioAbout({ data }) {
  if (!data) return null;

  const infoRows = [
    { label: "Location", value: data.location, link: null, icon: <FaMapMarkerAlt size={10} /> },
    { label: "Email",    value: data.email,    link: `mailto:${data.email}`, icon: <FaEnvelope size={10} /> },
    { label: "GitHub",   value: data.github ? "@" + data.github.split("/").pop() : null, link: data.github, icon: <FaGithub size={10} /> },
    { label: "LinkedIn", value: data.linkedin ? "LinkedIn" : null, link: data.linkedin, icon: <FaLinkedin size={10} /> },
    { label: "Website",  value: data.website,  link: data.website, icon: <FaGlobe size={10} /> },
  ].filter((r) => r.value);

  return (
    <section id="about" style={{
      background: "#f5f5f2",
      padding: "7rem 4rem 7rem 4rem",
      borderBottom: "1px solid #ddddd8",
    }}>
      <div style={{ maxWidth: "900px" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <p style={{
            fontSize: "9px", textTransform: "uppercase",
            letterSpacing: "0.28em", color: "#b0b0aa", margin: "0 0 2rem",
          }}>
            About
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: "5rem" }} className="block lg:grid">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
              fontWeight: 400, lineHeight: 1.8,
              color: "#3a3a37",
              marginBottom: "3rem",
            }}>
              {data.bio}
            </p>

            {data.skills?.length > 0 && (
              <div>
                <p style={{
                  fontSize: "9px", textTransform: "uppercase",
                  letterSpacing: "0.24em", color: "#b0b0aa", marginBottom: "1.2rem",
                }}>
                  Skills
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {data.skills.slice(0, 14).map((skill, i) => (
                    <span key={i} style={{
                      fontSize: "10px", fontWeight: 500,
                      padding: "4px 12px",
                      border: "1px solid #ddddd8",
                      color: "#555550",
                      letterSpacing: "0.04em",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{
              fontSize: "9px", textTransform: "uppercase",
              letterSpacing: "0.24em", color: "#b0b0aa", marginBottom: "1.2rem",
            }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {infoRows.map((row, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  padding: "10px 0",
                  borderBottom: "1px solid #eeeee9",
                }}>
                  <span style={{ color: "#b0b0aa", marginTop: "2px", flexShrink: 0 }}>{row.icon}</span>
                  <div>
                    <p style={{
                      fontSize: "8.5px", textTransform: "uppercase",
                      letterSpacing: "0.18em", color: "#c0c0bb", margin: "0 0 2px",
                    }}>{row.label}</p>
                    {row.link ? (
                      <a href={row.link} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: "12px", color: "#1a1a1a", textDecoration: "none" }}>
                        {row.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "12px", color: "#1a1a1a" }}>{row.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
