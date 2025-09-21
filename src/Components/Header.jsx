import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const LINKS = {
    dashboard: "/",
    reports: "/explore", // or "/reports" if you have that page
    docs: "/docs",
  };

  const isActive = (key) => pathname === LINKS[key];

  const Tab = ({ label, to, active }) => (
    <button
      onClick={() => navigate(to)}
      className={[
        "relative px-3 py-2 text-sm font-medium transition",
        active ? "text-sky-700" : "text-slate-600 hover:text-sky-700"
      ].join(" ")}
    >
      {label}
      {active && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-8 bg-sky-600 rounded-full" />
      )}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto h-14 px-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-sky-500" />
          <span className="font-semibold text-slate-800">FloatChat</span>
        </div>

        {/* Tabs */}
        <nav className="flex items-center gap-2">
          <Tab label="Dashboard" to={LINKS.dashboard} active={isActive("dashboard")} />
          <Tab label="Reports"   to={LINKS.reports}   active={isActive("reports")} />
          <Tab label="Docs"      to={LINKS.docs}      active={isActive("docs")} />
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(LINKS.docs)}
            className="w-8 h-8 grid place-items-center rounded-full bg-slate-100 text-slate-600"
            title="Help / Docs"
          >
            ?
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white grid place-items-center text-xs">
            you
          </div>
        </div>
      </div>
    </header>
  );
}
