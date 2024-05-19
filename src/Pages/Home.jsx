import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <div style={{display: "flexbox", fontSize: "2em", verticalAlign: "center"}}>
            <div style={{textAlign: "center", paddingBottom: "3vw", paddingTop: "1.2vw"}}>
                <Link to="/Projeto" style={{color:"black" ,textDecorationLine: "none", paddingRight: "2vw"}}>Projeto</Link>
                <a style={{paddingRight: "2vw"}}>Contato</a>
                <Link to='/ConnectWorkbench'  style={{border: "none", backgroundColor:"#0F6193", color: "white", borderRadius: "5%", padding: "0.7em 1.2em 0.7em 1.2em", textDecoration:"none"}}>Conectar Bancada</Link>
            </div>
            <div style={{textAlign: "center", paddingBottom: "3vw"}}>
                <img src="src/Pages/Logo.png" width="280em" height="200em" />
                <h4></h4>
                <a>Kit didático para estudo da produção de energia fotovoltaica</a>
            </div>
        </div>
    )
}
export default Home