import Card from "./components/Card"
import Contador from "./components/Contador";
import FavoriteColor from "./components/FavoriteColor";
import Hello from "./components/Hello"
import ListCards from "./components/ListCards";
import TabelaProdutos from "./components/TabelaProdutos";
import listaLivros from './data/livros.json';

function App() {
  const name = "Fulano";

  return (
    <>
      <h1>App Exemplo</h1>
      <Hello />
      <Hello nome="Ries" />
      <Hello nome={name} />
      <Contador />
      <FavoriteColor />
      <Card titulo="Titulo">
        <h3>Descrição</h3>
        <p>Detalhe</p>
      </Card>
      <ListCards lista={listaLivros}/>
      <TabelaProdutos lista={listaLivros}/>
    </>
  )
}

export default App
