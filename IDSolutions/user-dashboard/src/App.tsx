import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CommonLayout } from "./components/layouts";
import HomePage from "./pages/Home";
import UsersPage from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CommonLayout>
              <HomePage />
            </CommonLayout>
          }
        />
        <Route
          path="/users"
          element={
            <CommonLayout>
              <UsersPage />
            </CommonLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
