import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from "./components/dashboardLayout/dashboardLayout";
import UserRole from "./components/UserRole/main";


function App() {
  return (
    <Routes>
    <Route element={<DashboardLayout />}>
 
      <Route element={<UserRole />} path="/" />
    </Route>
    </Routes>
  );
}

export default App;
