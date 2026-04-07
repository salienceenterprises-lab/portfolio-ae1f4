"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function PortfolioCommunity({ data }) {
  const items = data?.community;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="community" style={{
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
            Community &amp; Impact
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "3rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid #eeeee9",
              }}
              className="block sm:grid"
            >
              {/* Year + role */}
              <div style={{ paddingTop: "2px" }}>
                {item.year && (
                  <span style={{
                    display: "block",
                    fontSize: "10px", fontWeight: 500,
                    color: "#888880", letterSpacing: "0.06em",
                    marginBottom: "3px",
                  }}>
                    {item.year}
                  </span>
                )}
                {(item.role || item.type) && (
                  <span style={{
                    fontSize: "9px", fontWeight: 500,
                    textTransform: "uppercase", letterSpacing: "0.14em",
                    color: "#b0b0aa",
                  }}>
                    {item.role || item.type}
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontSize: "16px", fontWeight: 600, color: "#1a1a1a",
                  margin: "0 0 8px", letterSpacing: "-0.01em",
                }}>
                  {item.title || item.name || item.organization}
                </h3>
                {item.description && (
                  <p style={{
                    fontSize: "13px", color: "#6a6a65",
                    lineHeight: 1.75, margin: 0, fontWeight: 400,
                  }}>
                    {item.description}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      marginTop: "10px",
                      fontSize: "9.5px", fontWeight: 500,
                      textTransform: "uppercase", letterSpacing: "0.18em",
                      color: "#888880", textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#888880"}
                  >
                    View <FaExternalLinkAlt size={9} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
