import Relogio from "../../components/Relogio";
import Navegacao from "../../components/Navegacao";
import Destaques from "../../components/Destaques";
import ListaFilmes from "../../components/ListaFilmes";
import DetalhesFilme from "../../components/DetalhesFilme";
import Rodape from "../../components/Rodape";

const Home = () => {
  return (
    <>
      <Relogio />
      <Navegacao />
      <Destaques id="destaques" />
      <ListaFilmes id="filmescartaz" />
      <DetalhesFilme />
      <Rodape id="contato" />
    </>
  );
};

export default Home;
