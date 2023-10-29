import React, { useEffect, useState } from 'react';
import DashboardNavBar from './components/DashboardNavBar';
import DashboardListaPedidos from './components/DashboardListaPedidos';
import DashboardListaStatus from './components/DashboardListaStatus';
import DashboardTotalVendas from './components/DashboardTotalVendas';

const Dashboard = ({ setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div style={{background: "#ebecec", minHeight: "100vh"}}>
      <DashboardNavBar handleLogout={handleLogout}/>


      <div className='panel'>
        
        <DashboardListaStatus />
        <DashboardTotalVendas />
    </div>

        <DashboardListaPedidos />

    </div>
  );
};

export default Dashboard;
