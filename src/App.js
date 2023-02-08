import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Customer from "./pages/Customer";

import useFetch from "./hooks/UseFetch";

import "./App.scss";

export const AppContext = React.createContext();

function App() {
  const { data, loading } = useFetch("data.json");

  if (loading) {
    return <Loader />;
  }

  const formattedData = {};
  for (let item of data) {
    if (formattedData.hasOwnProperty(item.customer_id)) {
      formattedData[item.customer_id].push(item);
    } else {
      formattedData[item.customer_id] = [item];
    }
  }

  return (
    <AppContext.Provider value={{ results: formattedData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":customerId" element={<Customer />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__icon"></div>
    </div>
  );
};
