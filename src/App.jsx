import { useState } from "react";

function CrosswalkTab() {
  return (
    <div>
      <h2>Crosswalk</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
        <div style={{ flex: 1, border: "2px dashed #ccc", padding: "40px", textAlign: "center" }}>
          <p>📁 Upload Library A</p>
          <input type="file" accept=".csv,.xlsx" />
          <select style={{ display: "block", marginTop: "10px", width: "100%" }} disabled>
            <option>Select title column...</option>
          </select>
        </div>
        <div style={{ flex: 1, border: "2px dashed #ccc", padding: "40px", textAlign: "center" }}>
          <p>📁 Upload Library B</p>
          <input type="file" accept=".csv,.xlsx" />
          <select style={{ display: "block", marginTop: "10px", width: "100%" }} disabled>
            <option>Select title column...</option>
          </select>
        </div>
      </div>
      <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "40px", textAlign: "center", color: "#999" }}>
        Run a crosswalk to see results
      </div>
    </div>
  );
}

function SummariesTab() {
  return (
    <div>
      <h2>Summaries</h2>
      <div style={{ border: "2px dashed #ccc", padding: "40px", textAlign: "center", marginTop: "16px" }}>
        <p>📄 Upload a PDF or zip of PDFs</p>
        <input type="file" accept=".pdf,.zip" />
      </div>
      <div style={{ marginTop: "24px", border: "1px solid #ccc", padding: "40px", textAlign: "center", color: "#999" }}>
        Progress and results will appear here
      </div>
    </div>
  );
}

function QueryTab() {
  return (
    <div>
      <h2>Query</h2>
      <div style={{ border: "1px solid #ccc", height: "400px", marginTop: "16px", padding: "16px", overflowY: "auto", color: "#999" }}>
        Message history will appear here
      </div>
      <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
        <input type="text" placeholder="Ask a question about your library..." style={{ flex: 1, padding: "8px", border: "1px solid #ccc" }} />
        <button style={{ padding: "8px 16px", background: "#0b8fa8", color: "white", border: "none", cursor: "pointer" }}>Send</button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("crosswalk");

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Mytonomy Content Library Platform</h1>
      <nav style={{ display: "flex", gap: "8px", borderBottom: "2px solid #ccc", paddingBottom: "8px" }}>
        {["crosswalk", "summaries", "query"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 20px",
              background: activeTab === tab ? "#0b8fa8" : "#eee",
              color: activeTab === tab ? "white" : "black",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
              textTransform: "capitalize"
            }}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div style={{ marginTop: "24px" }}>
        {activeTab === "crosswalk" && <CrosswalkTab />}
        {activeTab === "summaries" && <SummariesTab />}
        {activeTab === "query" && <QueryTab />}
      </div>
    </div>
  );
}