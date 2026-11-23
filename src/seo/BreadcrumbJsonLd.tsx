import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import names from "./breadcrumbs.json";

const ORIGIN = "https://www.anewlief.com";

// Breadcrumb record (schema.org BreadcrumbList) for every inner page. Markup only, nothing renders.
const BreadcrumbJsonLd = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const name = (names as Record<string, string>)[path];
  if (!name) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Lïef Development", item: `${ORIGIN}/` },
      { "@type": "ListItem", position: 2, name, item: `${ORIGIN}${path}` },
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;
