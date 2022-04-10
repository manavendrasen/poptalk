import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import {
  RecoilRoot,
} from "recoil";

// routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { DashboardMenu } from "./components/Dashboard/DashboardMenu";
import { Trending } from "./pages/Trending/Trending";
import { Fav } from "./pages/Fav/Fav";
import { PartyBucket } from "./pages/Buckets/PartyBucket";
import { ChatBox } from "./pages/Chat/ChatBox";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <DashboardMenu>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.APP_HOME} element={<Dashboard />} />
                <Route path={ROUTES.TRENDING} element={<Trending />} />
                <Route path={ROUTES.FAV} element={<Fav />} />
                <Route path={ROUTES.BUCKET_DETAIL} element={<PartyBucket />} />
                <Route path={ROUTES.CHAT} element={<ChatBox />} />
              </Routes>
            </DashboardMenu>
          </ThemeProvider>
        </Router>
      </RecoilRoot>
    </>
  );
};

export default App;
