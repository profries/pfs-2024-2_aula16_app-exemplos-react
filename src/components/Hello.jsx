function Hello({nome}) {
    //const nome = props.nome ?props.nome : 'World!'
    return(
        (nome)
        ? (<h3>Hello {nome}!</h3>)
        : (<h3>Hello World!</h3>)
    )
}

export default Hello;