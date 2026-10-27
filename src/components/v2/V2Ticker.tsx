const items = [
  { value: "", label: "Adaptive Reuse" },
  { value: "", label: "Boutique Residential" },
  { value: "", label: "Japandi Design" },
  { value: "", label: "SABS\u2122 Building System" },
  { value: "", label: "Midtown Phoenix" },
  { value: "300+", label: "Skilled Tradesmen" },
  { value: "100+", label: "Years of Expertise" },
  { value: "14%", label: "Average Time Savings" },
  { value: "$600+", label: "Million in Completed Projects" },
  { value: "#1", label: "SABS\u2122 Installer in North America" },
];

const TickerItem = ({ value, label }: { value?: string; label: string }) => (
  <span className="flex items-center gap-3 whitespace-nowrap">
    {value && (
      <span style={{ fontFamily: "'Japandi', sans-serif", fontSize: "1.25rem", color: "var(--v2-neon)" }}>
        {value}
      </span>
    )}
    <span style={{ fontSize: "1.25rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--v2-muted)" }}>
      {label}
    </span>
    <span style={{ color: "rgba(194,184,167,.15)", margin: "0 24px" }}>◆</span>
  </span>
);

const V2Ticker = () => {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{
        padding: "0.9rem 0",
        background: "linear-gradient(to right, #1B3427, #15271D)",
      }}
    >
      <div className="v2-ticker-track flex items-center" style={{ width: "max-content" }}>
        {repeated.map((item, i) => (
          <TickerItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default V2Ticker;
