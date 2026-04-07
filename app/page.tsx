"use client";
import React from "react";
import portfolioData from "../profile.json";

import Sidebar from "./components/sidebar";
import PortfolioHero from "./components/hero";
import PortfolioAbout from "./components/about";
import PortfolioEducation from "./components/education";
import PortfolioExperience from "./components/experience";
import PortfolioProjects from "./components/projects";
import PortfolioSkills from "./components/skills";
import PortfolioCommunity from "./components/community";
import PortfolioContact from "./components/contact";

export default function DeployedPortfolio() {
  const data = portfolioData;

  if (!data) return (
    <div style={{ minHeight: "100vh", background: "#f5f5f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: "11px", color: "#b0b0aa", letterSpacing: "0.2em", textTransform: "uppercase" }}>Loading…</span>
    </div>
  );

  return (
    <div style={{ background: "#f5f5f2", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; }
        ::placeholder { color: #c0c0bb; }
        @media (max-width: 1023px) {
          .atelier-main { margin-left: 0 !important; padding-top: 52px !important; }
        }
      `}</style>

      <Sidebar data={data} />

      <main className="atelier-main" style={{ marginLeft: "220px" }}>
        <PortfolioHero data={data} />
        <PortfolioAbout data={data} />
        <PortfolioEducation data={data} />
        <PortfolioExperience data={data} />
        <PortfolioProjects data={data} />
        <PortfolioSkills data={data} />
        <PortfolioCommunity data={data} />
        <PortfolioContact data={data} />
      </main>
    </div>
  );
}
