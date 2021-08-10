import React, { Component } from 'react';
import CardNota from '../CardNota/cardNota';
import "./estilo.css";

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Estágio", "Projetos", "Estudos").map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaNotas;