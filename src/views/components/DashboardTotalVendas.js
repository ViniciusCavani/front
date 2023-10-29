import React, {useState, useEffect} from 'react';
import '../../App.css';

const DashboardTotalVendas = () => {

    const [total, setTotal ] = useState("0")

    useEffect(() => {
    fetch('http://localhost:3000/pedidos/totalVendas')
        .then(response => response.json())
        .then(responseData => {
            setTotal("R$ "+responseData.totalVendas.replace(".", ","))
        })
    }, [])
    return (
      <div className='card-total-vendas'>
        <div>
          <h2> Total de vendas</h2>
          <h1>{total}</h1>
        </div>
      </div>  
    )
}

export default DashboardTotalVendas;