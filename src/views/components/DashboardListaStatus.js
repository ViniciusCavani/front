import React, {useState, useEffect} from 'react';
import '../../App.css';

const DashboardListaStatus = () => {

    const [processando, setProcessando ] = useState("0")
    const [pendente, setPendente ] = useState("0")
    const [aprovado, setAprovado ] = useState("0")
    const [cancelado, setCancelado ] = useState("0")
    const [total, setTotal ] = useState("0")

    useEffect(() => {
    fetch('http://localhost:3000/pedidos/resumoStatus')
        .then(response => response.json())
        .then(responseData => {
            setProcessando(responseData.qtdStatusProcessando)
            setPendente(responseData.qtdStatusPendente)
            setAprovado(responseData.qtdStatusAprovado)
            setCancelado(responseData.qtdStatusCancelado)
            setTotal(responseData.qtdTotalPedidos)
        })
    }, [])
    return (
        <div className='card-status'>
          <h2>Status dos Pedidos</h2>
          
          <div className='card-status-list'>
            <div className='card-status-item'>
              <h1 style={{ color: "#FFCE00" }}>{processando}</h1>
              <h2>Processando</h2>
            </div>
            <div className='card-status-item'>
            <h1 style={{ color: "#2993CE" }}>{pendente}</h1>
              <h2>Pendente</h2>
            </div>
            <div className='card-status-item'>
            <h1 style={{ color: "#002d32" }}>{aprovado}</h1>
              <h2>Aprovado</h2>
            </div>
            <div className='card-status-item'>
              <h1 style={{ color: "#C73939" }}>{cancelado}</h1>
              <h2>Cancelado</h2>
            </div>
            <div className='card-status-item'>
              <h1 style={{ color: "black" }}>{total}</h1>
              <h2>Total</h2>
            </div>
          </div>
        </div>    
    )
}

export default DashboardListaStatus;