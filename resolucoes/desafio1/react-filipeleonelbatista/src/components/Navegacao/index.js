import * as Styled from "./styles";

const Navegacao = ({ handleReservar }) => {
  return (
    <Styled.Container>
      <Styled.Logo src="/logo.png" />
      <Styled.Menu>
        <Styled.MenuItem href="#destaques">Destaques</Styled.MenuItem>
        <Styled.MenuItem href="#filmescartaz">Filmes em cartaz</Styled.MenuItem>
        <Styled.MenuItem href="#contato">Contato</Styled.MenuItem>
      </Styled.Menu>
      <Styled.CTAButton onClick={handleReservar}>
        Compre seu ingresso
      </Styled.CTAButton>
    </Styled.Container>
  );
};

export default Navegacao;
