import { Link } from "react-router-dom" // npm i react-router-dom

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <div>
                <h2>Desenvolvedor: Abraão</h2>
                <h3></h3>
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}