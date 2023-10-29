import React, {useState, useEffect} from 'react';
import '../../App.css';


const DashboardListaPedidos = () => {

    const [jsonPedidos, setJsonPedidos] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/pedidos')
        .then(response => response.json())
        .then(responseData => {
        console.log(responseData)
        setJsonPedidos(responseData)
        })
    }, [])
    return (
        <div className='row' style={{marginTop: "-5px"}}>
            {jsonPedidos.map((item, index) => { 
                let color = "black"
                switch(item.status) {
                    case "PROCESSANDO":
                        color = "#FFCE00"
                        break;
                    case "PENDENTE":
                        color = "#2993CE"
                        break;
                    case "APROVADO":
                        color = "#002d32"
                        break;
                    case "CANCELADO":
                        color = "#C73939"
                        break;
                }
                return(
                    <div className='col-2' style={{ padding: "1px"}}>
                        <div className='card'>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>
                                <h5 style={{ color: "#005A64" }}>Pedido</h5>
                                <button style={{ background: "white", borderWidth: "1px", borderColor: "#73B1B2", color: "#73B1B2", borderStyle: "solid", borderRadius: "2px" }}>
                                    ACESSAR
                                </button>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px"}} className='linha-card'>
                                <p className='p-CardPedido'>Numero</p>
                                <p style={{marginTop: "1px", marginBottom: "4px", fontSize: "13px", fontWeight: "900"}}>{item.numero}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px"}} className='linha-card'>
                                <p className='p-CardPedido'>Valor</p>
                                <p style={{marginTop: "1px", marginBottom: "4px", fontSize: "13px", fontWeight: "900"}}>R$ {item.valor.toFixed(2).toString().replaceAll('.', ',')}</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px"}} className='linha-card'>
                                <p className='p-CardPedido'>Status</p>
                                <p className='p2-CardPedido' style={{color: color}}>{item.status}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>     
    )
}

export default DashboardListaPedidos;