const legacyHashTargets: Readonly<Record<string, string>> = {
  "#overview": "/roadmap/",
  "#timeline": "/roadmap/timeline/",
  "#next-year": "/roadmap/timeline/#next-year",
  "#research": "/roadmap/research/",
  "#degree": "/roadmap/research/#degree",
  "#internship": "/roadmap/internships/",
  "#domestic": "/roadmap/domestic/",
  "#overseas": "/roadmap/overseas/",
  "#career": "/roadmap/career/",
  "#life": "/roadmap/finance-life/",
  "#decisions": "/roadmap/decisions/",
  "#sources": "/roadmap/decisions/#sources",
};

export function redirectLegacyHash(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const pathname =
    window.location.pathname === "/roadmap/index.html"
      ? "/roadmap/"
      : window.location.pathname;

  if (pathname !== "/roadmap/") {
    return false;
  }

  const target = legacyHashTargets[window.location.hash];
  if (!target) {
    return false;
  }

  window.location.replace(target);
  return true;
}
