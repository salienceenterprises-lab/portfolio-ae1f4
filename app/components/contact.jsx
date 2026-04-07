"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(null);

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio Contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === field ? "#1a1a1a" : "#ddddd8"}`,
    color: "#1a1a1a",
    fontSize: "13px",
    padding: "12px 0",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    boxSizing: "border-box",
  });

  return (
    <section id="contact" style={{
      background: "#f5f5f2",
      padding: "7rem 4rem 8rem",
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
            Contact
          </p>
          <div style={{ height: "1px", background: "#ddddd8" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="block lg:grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800,
              letterSpacing: "-0.04em", lineHeight: 0.92,
              color: "#1a1a1a", margin: "0 0 2rem",
            }}>
              Let's<br />work<br />together.
            </h2>
            <p style={{
              fontSize: "13px", color: "#888880",
              lineHeight: 1.8, maxWidth: "300px",
              margin: "0 0 2.5rem",
            }}>
              Open to new opportunities and collaborations. Reach out and let's build something great.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {data?.email && (
                <a href={`mailto:${data.email}`}
                  style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#555550", fontSize: "12px" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#555550"}>
                  <FaEnvelope size={11} style={{ color: "#b0b0aa" }} />
                  {data.email}
                </a>
              )}
              {data?.github && (
                <a href={data.github} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#555550", fontSize: "12px" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#555550"}>
                  <FaGithub size={11} style={{ color: "#b0b0aa" }} />
                  {"@" + data.github.split("/").pop()}
                </a>
              )}
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#555550", fontSize: "12px" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#1a1a1a"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#555550"}>
                  <FaLinkedin size={11} style={{ color: "#b0b0aa" }} />
                  LinkedIn
                </a>
              )}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "sent" ? (
              <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "flex-start", gap: "1rem", paddingTop: "1rem",
              }}>
                <div style={{
                  width: "40px", height: "40px",
                  border: "1px solid #ddddd8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FaCheck size={14} style={{ color: "#555550" }} />
                </div>
                <p style={{ fontSize: "13px", color: "#1a1a1a", margin: 0, fontWeight: 500 }}>
                  Message sent.
                </p>
                <p style={{ fontSize: "12px", color: "#888880", margin: 0 }}>
                  I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <input
                    type="text" placeholder="Name" required
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <input
                    type="email" placeholder="Email" required
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <textarea
                    rows={5} placeholder="Message" required
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "none" }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      background: "#1a1a1a", color: "#f5f5f2",
                      border: "none", padding: "12px 32px",
                      fontSize: "9px", fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: "0.22em",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      opacity: status === "sending" ? 0.6 : 1,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => { if (status !== "sending") { e.currentTarget.style.background = "#333"; } }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#1a1a1a"; }}
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </div>
                {status === "error" && (
                  <p style={{ fontSize: "11px", color: "#cc4444", margin: 0 }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
