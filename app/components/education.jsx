"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{
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
            Education
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((edu, i) => (
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
                padding: "2.5rem 0",
                borderBottom: "1px solid #eeeee9",
              }}
              className="block sm:grid"
            >
              {/* Period */}
              <div style={{ paddingTop: "2px" }}>
                <span style={{
                  fontSize: "10px", fontWeight: 500,
                  color: "#888880", letterSpacing: "0.08em",
                }}>
                  {edu.year || edu.graduationYear || edu.period || "Present"}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: "16px", fontWeight: 600, color: "#1a1a1a",
                  margin: "0 0 6px", letterSpacing: "-0.01em",
                }}>
                  {edu.degree || edu.field || edu.program}
                </h3>
                <p style={{
                  fontSize: "12px", fontWeight: 500,
                  color: "#888880", margin: "0 0 10px", letterSpacing: "0.02em",
                }}>
                  {edu.institution || edu.school}
                </p>
                {edu.description && (
                  <p style={{
                    fontSize: "13px", color: "#6a6a65",
                    lineHeight: 1.75, margin: 0, fontWeight: 400,
                  }}>
                    {edu.description}
                  </p>
                )}
                {edu.gpa && (
                  <span style={{
                    display: "inline-block", marginTop: "10px",
                    fontSize: "10px", fontWeight: 500, color: "#888880",
                    border: "1px solid #ddddd8", padding: "3px 10px",
                    letterSpacing: "0.06em",
                  }}>
                    GPA {edu.gpa}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
