import { Link } from "react-router-dom" // npm i react-router-dom

export default function Tarefas() {
    return (
        <>
            <h1>Tarefas</h1>
            <div>
                <li>Tarefa1</li>
                <li>Tarefa2</li>
                <li>Tarefa3</li>
                <li>Tarefa4</li>
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}