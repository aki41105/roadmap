import { getPageContent } from "./pages";
import { resolveRoute } from "./app/routes";
import { AppShell } from "./components/shell/AppShell";
import "./styles.css";
import "./app/shell.css";

interface AppProps {
  pathname: string;
}

export function App({ pathname }: AppProps) {
  const route = resolveRoute(pathname);
  const page = getPageContent(route.id);
  const Page = page.Component;

  return (
    <AppShell route={route} page={page}>
      <Page />
    </AppShell>
  );
}
