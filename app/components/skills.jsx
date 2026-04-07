"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSkills({ data }) {
  const skills = data?.skills;
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  const categories = data?.skillCategories;
  const hasCategories =
    categories && typeof categories === "object" && Object.keys(categories).length > 0;

  return (
    <section id="skills" style={{
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
            Skills
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        {hasCategories ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(categories).map(([cat, catSkills], ci) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.07 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "3rem",
                  padding: "2rem 0",
                  borderBottom: "1px solid #eeeee9",
                }}
                className="block sm:grid"
              >
                <div style={{ paddingTop: "2px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 500,
                    textTransform: "uppercase", letterSpacing: "0.16em",
                    color: "#888880",
                  }}>
                    {cat}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {(Array.isArray(catSkills) ? catSkills : []).map((skill, i) => (
                    <span key={i} style={{
                      fontSize: "10px", fontWeight: 500,
                      padding: "4px 12px",
                      border: "1px solid #ddddd8",
                      color: "#555550", letterSpacing: "0.04em",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {skills.map((skill, i) => (
                <span key={i} style={{
                  fontSize: "10px", fontWeight: 500,
                  padding: "5px 14px",
                  border: "1px solid #ddddd8",
                  color: "#555550", letterSpacing: "0.04em",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
