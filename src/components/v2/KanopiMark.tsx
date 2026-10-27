// Small "Powered by Kanopi" mark for Lïef Development pages. Kanopi is the design
// and estimating software we built. Inline styles only: this repo's committed CSS
// is a brand file, so no new utility classes.
export const KANOPI_URL = "https://kanopibuild.com";

export const KanopiLink = ({ children = "Kanopi" }: { children?: React.ReactNode }) => (
  <a href={KANOPI_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--v2-neon)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
    {children}
  </a>
);

const KanopiMark = ({ style }: { style?: React.CSSProperties }) => (
  <a
    href={KANOPI_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "inline-block", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--v2-muted)", textDecoration: "none", borderBottom: "1px solid var(--v2-rule)", paddingBottom: "2px", ...style }}
  >
    Powered by Kanopi &#8599;
  </a>
);

export default KanopiMark;
