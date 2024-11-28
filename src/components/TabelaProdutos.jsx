import "./TabelaProdutos.css"
export default function TabelaProdutos({lista}) {
    return (
        <table id="produtos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                {lista.map (produto => 
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco.toLocaleString(
                            'pt-BR',
                            { style: 'currency', currency: 'BRL'}
                        )}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}