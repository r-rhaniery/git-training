import React from 'react'
import Image404 from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Error404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={Image404} alt="imagem de erro 404" />
            <p className="naoencontrado-texto"> Woof? Essa página não existe.</p>
        </main>
    )
}
export default Error404