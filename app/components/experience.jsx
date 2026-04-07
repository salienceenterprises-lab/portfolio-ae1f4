"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{
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
            Experience
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "3rem",
                padding: "2.8rem 0",
                borderBottom: "1px solid #eeeee9",
              }}
              className="block sm:grid"
            >
              {/* Period + company */}
              <div style={{ paddingTop: "2px" }}>
                <span style={{
                  display: "block",
                  fontSize: "10px", fontWeight: 500,
                  color: "#888880", letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}>
                  {exp.duration || exp.period || exp.startDate}
                </span>
                <span style={{
                  display: "block",
                  fontSize: "10px", fontWeight: 500,
                  color: "#b0b0aa", letterSpacing: "0.04em",
                }}>
                  {exp.company || exp.organization}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: "17px", fontWeight: 600, color: "#1a1a1a",
                  margin: "0 0 12px", letterSpacing: "-0.01em",
                }}>
                  {exp.role || exp.title || exp.position}
                </h3>

                {exp.description && (
                  <p style={{
                    fontSize: "13px", color: "#6a6a65",
                    lineHeight: 1.75, margin: "0 0 16px", fontWeight: 400,
                  }}>
                    {exp.description}
                  </p>
                )}

                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul style={{
                    margin: "0 0 16px", padding: "0 0 0 1rem",
                    display: "flex", flexDirection: "column", gap: "6px",
                    listStyle: "none",
                  }}>
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} style={{
                        fontSize: "13px", color: "#6a6a65",
                        lineHeight: 1.7, position: "relative",
                        paddingLeft: "1rem",
                      }}>
                        <span style={{
                          position: "absolute", left: 0, top: "8px",
                          width: "4px", height: "1px", background: "#b0b0aa",
                        }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                )}

                {(exp.tech || exp.stack) && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
                    {(exp.tech || exp.stack).map((t, j) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
