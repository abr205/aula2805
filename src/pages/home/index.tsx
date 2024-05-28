import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div>
                <p>Olá Mundo!</p>
                <hr/>
                <p>esse é o nosso projeto html</p>
                <hr />
            </div>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/tarefas">Tarefas</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </>
    )
}