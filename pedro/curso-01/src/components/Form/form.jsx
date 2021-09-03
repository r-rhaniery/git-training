import React, { Component } from 'react'
import "./estilo.css"

class FormCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    handleChangeTitle(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }
    handleChangeText(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }
    criarNota(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota = (this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
                <input
                    type="text"
                    className="form-cadastro_input"
                    placeholder="Titulo">
                    onChange= {this.handleChangeTitle.bind(this)}
                </input>
                <textarea
                    className="form-cadastro_input"
                    placeholder="Escreva sua nota"
                    rows={15}>
                    onChange={this.handleChangeText.bind(this)}
                </textarea>
                <button className="form-cadastro_input form-cadastro_submit" >
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormCadastro;