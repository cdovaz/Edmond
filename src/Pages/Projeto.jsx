
const Projeto = () => {
    const styleH1 = {
        color: "#0F6193",
        margin: "0%"
    }
    const styleH2 = {
        color: "#FFAB03",
        fontSize: "2.4em",
        margin: '0%'
    }
    const textSize = {
        fontSize: "2em"
    }
    return (
        <div style={{ margin: "4em"}}>
            <div onClick={ () => {window.history.back()}} style={{display: "flex", flexDirection: "row", fontSize: "1.5em"}}>
                <img  src="src/Pages/2Arrow.svg" alt="voltar" style={{width: "2em", height: '2em', verticalAlign: "center"}} />
                <h1 style={styleH1}>EDMOND</h1>
            </div>
            <div style={{margin: "1.5em"}}>
                <div>
                    <div>
                        <h2 style={styleH2}>Sobre</h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p style={ { fontSize: "2em", maxWidth: '32em', margin: "0.5em"}}>O projeto tem como objetivo a criação de um kit didático para ensino do uso de placas fotovoltaicas, com foco em sistemas educacionais.</p>
                            <img style={ { marginRight: "16em"}} src="src/Pages/BancadaEdmond.png" alt="bancada" />
                        </div>
                    </div>
                    <div>
                        <h2 style={styleH2}>Justificativa</h2>
                        <div style={{display:"flex", flexDirection: "row"}}>
                            <p style={{ fontSize: "2em", margin: "0.5em"}}>O projeto apresenta-se como uma oportunidade de facilitar o aprendizado do funcionamento da
                             energia fotovoltaica em instituições de aprendizagem. Ademais, conscientizar os estudantes acerca dos impactos
                             ambientais gerados pela utilização de energias convencionais. As bancadas didáticas são reconhecidas no mercado
                             por seus diferenciais de qualidade, necessários para o ensino completo das tecnologias presentes nas placas solares.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Projeto