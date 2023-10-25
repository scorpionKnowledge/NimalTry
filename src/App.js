import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Home = lazy(() => import("./pages/home.js"));
const UserList = lazy(() => import("./pages/userlist"));
const ClassComponent = lazy(() => import("./pages/class-comp"));
const FunctionalComponent = lazy(() => import("./pages/functional-comp"));
const ScientistListPage = lazy(() => import("./pages/scientiest-card-try.js"));

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router basename="/">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="userlist" element={<UserList />}></Route>
          <Route path="classcomp" element={<ClassComponent />}></Route>
          <Route path="funcomp" element={<FunctionalComponent />}></Route>
          <Route path="profile-card" element={<ScientistListPage />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
