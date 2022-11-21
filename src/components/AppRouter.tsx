import React from 'react';
import { Route, Routes } from "react-router-dom"
import App from "../pages/App";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<App/>}/>
    </Routes>
  );
};

export default AppRouter;
