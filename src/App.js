import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" elemnt={<Dashboard />} />
              <Route path="/team" elemnt={<Team />} />
              <Route path="/contacts" elemnt={<Contacts />} />
              <Route path="/invoices" elemnt={<Invoices />} />
              <Route path="/form" elemnt={<Form />} />
              <Route path="/bar" elemnt={<Bar />} />
              <Route path="/pie" elemnt={<Pie />} />
              <Route path="/line" elemnt={<Line />} />
              <Route path="/faq" elemnt={<FAQ />} />
              <Route path="/geography" elemnt={<Geography />} />
              <Route path="/calendar" elemnt={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
