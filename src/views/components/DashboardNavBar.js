import React from 'react';
import '../../App.css';
import logo from '../../assets/logoNegative 3.png'

const DashboardNavBar = ({handleLogout}) => {
  const sair = () => {
    handleLogout()
  }
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <img src={logo} alt="" />
        <h6 className='text-vertical-center'>MONITORAMENTO DE PEDIDOS</h6>
      </div>
      <button className='btn-sair' onClick={() => sair()}>
        SAIR
      </button>
    </div>
  );
};

export default DashboardNavBar;