import React, { useState } from "react";
import Header from "../Components/Header";

/* ---------- helpers ---------- */
const Section = ({ id, title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="border border-slate-200 rounded-xl bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </section>
  );
};

const Code = ({ children }) => (
  <pre className="overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-4 text-sm">
    <code>{children}</code>
  </pre>
);

/* ---------- clean, responsive architecture SVG ---------- */
/* ---------- Architecture Diagram (compact + responsive) ---------- */
const ArchitectureDiagram = () => (
  <div className="w-full">
    <svg
      viewBox="0 0 1000 260"
      className="w-full h-auto"
      role="img"
      aria-label="FloatChat system architecture"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9" />
        </marker>
        <linearGradient id="pipe" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <style>{`
          .box { fill:#f1f5f9; stroke:#94a3b8; rx:12; ry:12; }
          .t1 { font: 13px/1.2 -apple-system,BlinkMacSystemFont,Segoe UI,Inter,Roboto,sans-serif; fill:#0f172a; }
          .t2 { font: 11.5px/1.2 -apple-system,BlinkMacSystemFont,Segoe UI,Inter,Roboto,sans-serif; fill:#334155; }
        `}</style>
      </defs>

      {/* layout constants (compact to avoid clipping) */}
      {/* x positions: 40, 175, 395, 625, 865  */}
      {/* widths:     110, 190, 200, 220, 120   */}
      {/* gaps ~25px; fits within 1000 viewBox */}

      {/* CHAT */}
      <rect className="box" x="40" y="60" width="110" height="60" />
      <text className="t1" x="95" y="95" textAnchor="middle">(Chat)</text>
      <line x1="150" y1="90" x2="175" y2="90" stroke="url(#pipe)" strokeWidth="3" markerEnd="url(#arrow)" />

      {/* ANALYZER */}
      <rect className="box" x="175" y="45" width="190" height="90" />
      <text className="t1" x="270" y="78" textAnchor="middle">Domain-Specific Analyzer</text>
      <text className="t2" x="270" y="98" textAnchor="middle">NL → JSON Schema</text>
      <line x1="365" y1="90" x2="395" y2="90" stroke="url(#pipe)" strokeWidth="3" markerEnd="url(#arrow)" />

      {/* FLASK API */}
      <rect className="box" x="395" y="45" width="200" height="90" />
      <text className="t1" x="495" y="78" textAnchor="middle">Flask API</text>
      <text className="t2" x="495" y="98" textAnchor="middle">POST /api/predict/point</text>

      {/* ARGO (below API, no line crossing) */}
      <line x1="495" y1="135" x2="495" y2="160" stroke="#94a3b8" strokeWidth="2" />
      <rect className="box" x="430" y="160" width="130" height="50" />
      <text className="t1" x="495" y="188" textAnchor="middle">ARGO NetCDF</text>
      <text className="t2" x="495" y="205" textAnchor="middle">Preprocessing / QC</text>

      {/* MODELS */}
      <line x1="595" y1="90" x2="625" y2="90" stroke="url(#pipe)" strokeWidth="3" markerEnd="url(#arrow)" />
      <rect className="box" x="625" y="35" width="220" height="110" />
      <text className="t1" x="735" y="70" textAnchor="middle">ML Models (TEMP, PSAL × regions)</text>
      <text className="t2" x="735" y="92" textAnchor="middle">Hugging Face artifacts (auto-download & cache)</text>

      {/* UI */}
      <line x1="845" y1="90" x2="865" y2="90" stroke="url(#pipe)" strokeWidth="3" markerEnd="url(#arrow)" />
      <rect className="box" x="865" y="60" width="120" height="60" />
      <text className="t1" x="925" y="95" textAnchor="middle">UI (Map/Chat)</text>
    </svg>
  </div>
);


/* ---------- page ---------- */
export default function DocsPage() {
  const nav = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
    { id: "schema", label: "JSON Schema" },
    { id: "api", label: "API (Flask)" },
    { id: "models", label: "ML Models" },
    { id: "evaluation", label: "Evaluation & Geo Insights" },
    { id: "data", label: "Data Pipeline" },
    { id: "novelty", label: "Novelty" },
    { id: "roadmap", label: "Roadmap" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sticky header */}
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-slate-900">Documentation</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-10 grid grid-cols-12 gap-6">
        {/* left nav */}
        <aside className="col-span-12 md:col-span-3">
          <nav className="sticky top-20 space-y-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="block px-3 py-2 rounded-md text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* vertical divider */}
        <div className="hidden md:block col-span-0 md:col-span-1">
          <div className="h-full w-px bg-slate-200 mx-auto" />
        </div>

        {/* content */}
        <main className="col-span-12 md:col-span-8 space-y-5">
          <Section id="overview" title="Overview">
            <p className="text-slate-700">
              <strong>FloatChat</strong> converts natural-language ocean questions into a strict JSON
              plan using a <em>Domain-Specific Analyzer</em>. The plan is executed by a{" "}
              <strong>Flask</strong> API that loads region/parameter-specific models from{" "}
              <strong>Hugging Face</strong>, returning predictions to the UI as map layers,
              depth profiles, time-series, or chat replies.
            </p>
          </Section>

          <Section id="architecture" title="System Architecture">
            <ArchitectureDiagram />
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
              <li><strong>Frontend:</strong> React (Map + Chatbot + Reports)</li>
              <li><strong>Analyzer:</strong> NL → JSON Schema (domain terms → machine values)</li>
              <li><strong>Backend:</strong> Flask REST API</li>
              <li><strong>Models:</strong> TEMP & PSAL (multiple regions), artifacts on Hugging Face</li>
              <li><strong>Data:</strong> ARGO NetCDF (preprocessing, QC, optional interpolation)</li>
            </ul>
          </Section>

          <Section id="schema" title="JSON Schema (NL → Plan)">
            <p className="text-slate-700 mb-3">Fixed fields keep the backend deterministic and easy to validate.</p>
            <Code>{`{
  "task": "map | timeseries | depth_profile",
  "parameter": "TEMP | PSAL",
  "region": { "type": "named", "value": "arabian_sea" },
  "time":   { "start": "2025-01-01", "end": "2025-02-01" },
  "depth":  { "min": 0, "max": 500 },
  "coords": { "lat": 15.2, "lon": 73.5 }   // optional for point queries
}`}</Code>
            <p className="text-slate-600 text-sm">
              Examples resolved by analyzer: “monsoon” → Jun–Sep; “surface” → 0m; “mid-depth” → 200–1000m.
            </p>
          </Section>

          <Section id="api" title="API (Flask)">
            <div className="text-slate-700 space-y-3">
              <p><strong>Endpoint</strong></p>
              <Code>{`POST /api/predict/point`}</Code>

              <p><strong>Request</strong></p>
              <Code>{`{
  "task": "depth_profile",
  "parameter": "TEMP",
  "region": { "type": "named", "value": "arabian_sea" },
  "time": { "start": "2025-01-01", "end": "2025-02-01" },
  "depth": { "min": 500, "max": 500 },
  "coords": { "lat": 15.2, "lon": 73.5 }
}`}</Code>

              <p><strong>Response</strong></p>
              <Code>{`{
  "status": "ok",
  "model": "TEMP_CNN_HYBRID_v1",
  "prediction": 12.8,
  "units": "°C",
  "metadata": { "region": "arabian_sea", "lat": 15.2, "lon": 73.5, "depth": 500 }
}`}</Code>

              <p className="text-slate-600 text-sm">
                The Flask app lazy-loads Hugging Face artifacts (cached on disk). Invalid schema fields are rejected.
              </p>
            </div>
          </Section>

          <Section id="models" title="ML Models (Hugging Face)">
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li><strong>Random Forest</strong> + <strong>Deep models</strong> for TEMP & PSAL</li>
              <li><strong>Hybrid CNN + features</strong> (lat, lon, pres, psal) for depth-aware representations</li>
              <li><strong>Inputs:</strong> latitude, longitude, pressure (depth), psal</li>
              <li><strong>Outputs:</strong> predicted TEMP (°C) or PSAL (PSU)</li>
              <li><strong>Packaging:</strong> joblib / torch artifacts on Hugging Face; auto-download on first call</li>
            </ul>
          </Section>

          <Section id="evaluation" title="Model Evaluation & Geo Insights">
            <p className="text-slate-700 mb-3">
              We evaluate on held-out Indo-Pacific Argo profiles and visualize performance on the map.
              Users can toggle <em>depth bands</em> and <em>regions</em> to inspect error patterns.
            </p>
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li><strong>Metrics:</strong> RMSE, MAE, bias by depth band (0–50m, 50–200m, 200–1000m, &gt;1000m)</li>
              <li><strong>Geo overlays:</strong> choropleth of error/hit-rate; clickable cells show sample profiles</li>
              <li><strong>Hybrid gains:</strong> CNN+features improves mid-depth (200–1000m) RMSE vs. baseline RF</li>
              <li><strong>Reproducible:</strong> splits, seeds, preprocessing documented</li>
            </ul>
          </Section>

          <Section id="data" title="Data Pipeline">
            <ol className="list-decimal pl-5 text-slate-700 space-y-1">
              <li>Ingest ARGO NetCDF by region</li>
              <li>QC + normalization (units / ranges)</li>
              <li>Optional interpolation for sparse depths/times</li>
              <li>Feature engineering (lat, lon, pres, psal)</li>
              <li>Train/validate, export artifacts</li>
              <li>Serve predictions via Flask</li>
            </ol>
          </Section>

          <Section id="novelty" title="Novelty (What makes FloatChat different)">
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li><strong>Domain-aware translator</strong>: converts ocean terms (monsoon, surface, thermocline) to a strict JSON schema.</li>
              <li><strong>Stable JSON interface</strong>: backend always gets clean, machine-ready instructions.</li>
              <li><strong>Deep learning for depth profiles</strong>: depth-aware models capture vertical structure better than tabular ML.</li>
              <li><strong>Hybrid CNN + features</strong>: learned representations + classic ocean features for best of both worlds.</li>
              <li><strong>Real-world validation</strong>: Indo-Pacific Argo profiles; artifacts hosted on Hugging Face.</li>
              <li><strong>Interactive geographic analysis</strong>: explore spatial error/skill by region & depth band on the map.</li>
              <li><strong>Practical for climate research</strong>: ready to extend to O₂, pH, and seasonal policy dashboards.</li>
            </ul>
          </Section>

          <Section id="roadmap" title="Roadmap">
            <ul className="list-disc pl-5 text-slate-700 space-y-1">
              <li>Global coverage + new parameters (O₂, pH, currents)</li>
              <li>Streaming predictions & caching for sub-second responses</li>
              <li>Policy dashboards & seasonal summaries</li>
              <li>Fine-tune the analyzer on domain prompts</li>
            </ul>
          </Section>

          <Section id="faq" title="FAQ">
            <div className="text-slate-700 space-y-3">
              <div>
                <p className="font-medium">Q: Are predictions real?</p>
                <p className="text-slate-600">Yes—models are trained and artifacts are loaded from Hugging Face.</p>
              </div>
              <div>
                <p className="font-medium">Q: What happens for vague inputs?</p>
                <p className="text-slate-600">Analyzer resolves domain shorthand (e.g., “monsoon”, “surface”) into exact schema values.</p>
              </div>
              <div>
                <p className="font-medium">Q: Can we add new parameters?</p>
                <p className="text-slate-600">Yes—the schema and backend routing are parameter-modular.</p>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
