import React, { useState } from "react";


const ConnectWorkbench = () => {
    const styleH1 = {
        color: "#0F6193",
        margin: "0%"
    }
    const styleButton = {
        padding:'0.4em' ,fontSize: '1.25em',margin: "1em", border:'none', borderRadius: "8%", color: 'white', backgroundColor: '#0F6193'
    }
    const [dataTxt, setDataTxt] = useState(["Temperatura (°C)"]);
    const [dataVal, setDataVal] = useState([26.4]);
    
    //'Tensão(V)', '11.00V' ('Corrent(A)', '3.54A') "Temperatura (°C)", '26.4')
    return (
        <div style={{margin: "4em"}}>
            <div onClick={ () => {window.history.back()}} style={{display: "flex", flexDirection: "row", fontSize: "1.5em"}}>
                <img  src="src/Pages/2Arrow.svg" alt="voltar" style={{width: "2em", height: '2em'}} />
                <h1 style={styleH1}>EDMOND</h1>
            </div>
            <div style={{display:"flexbox" ,textAlign: "center"}}>
                <h1 style={ {fontSize: '3em', margin: "0"}}>Monitoramento dos Sensores</h1>
                <div style={{ display: "flexbox",border: "none"}}>
                    <button onClick={() => { setDataTxt('Tensão(V)'); setDataVal('11.00V')  }} style={styleButton}>Tensão</button>
                    <button onClick={() => { setDataTxt('Corrent(A)'); setDataVal('3.54A')}} style={styleButton}>Corrente</button>
                    <button onClick={() => { setDataTxt('Temperatura (°C)'); setDataVal('26.4')}} style={styleButton}>Temperatura</button>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <h1 style={{fontSize: '2.5em',color: '#FFAB03'}}>{dataTxt}</h1>
                <p style={{fontSize: '2em'}}>{dataVal}</p>
                <button style={{fontSize: '2em',color: 'white', backgroundColor: "#FFAB03", padding: "0.7rem 2.4rem 0.7rem 2.4rem", border: 'none', borderRadius: '8%'}}>Atualizar</button>
            </div>
        </div>
    )
}
export default ConnectWorkbench;