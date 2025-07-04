import { useState } from "react";

const TABS = [
  {
    label: "HISTORY",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    label: "APPROACH",
    content:
      "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    label: "CULTURE",
    content:
      "Culture tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget.",
  },
  {
    label: "METHOD",
    content:
      "Method tab content. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const ButtonTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 800,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "#f5f5f5",
          borderRadius: 2,
          overflow: "hidden",
          margin: "0 auto",
          maxWidth: 500,
        }}
      >
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            style={{
              flex: 1,
              padding: "16px 0",
              background: active === idx ? "#43b96e" : "transparent",
              color: active === idx ? "#fff" : "#444",
              fontWeight: 600,
              fontSize: 18,
              border: "none",
              outline: "none",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        style={{
          margin: "32px 0 40px 0",
          textAlign: "center",
          color: "#444",
          fontSize: 18,
          lineHeight: 1.6,
          minHeight: 80,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {TABS[active].content}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 0,
          borderBottom: "1.5px solid #eee",
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              color: active === idx ? "#43b96e" : "#444",
              fontWeight: active === idx ? 700 : 500,
              fontSize: 18,
              padding: "12px 0 8px 0",
              borderBottom:
                active === idx
                  ? "2.5px solid #43b96e"
                  : "2.5px solid transparent",
              cursor: "pointer",
              transition: "color 0.2s, border-bottom 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        style={{
          margin: "32px 0 0 0",
          textAlign: "center",
          color: "#444",
          fontSize: 18,
          lineHeight: 1.6,
          minHeight: 80,
          maxWidth: 700,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {TABS[active].content}
      </div>
    </div>
  );
};

export default ButtonTabs;
