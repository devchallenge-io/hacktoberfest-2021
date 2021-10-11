import * as Styled from "./styles";

const Rodape = () => {
  return (
    <Styled.Container>
      <p>
        Desenvolvido por{" "}
        <a target="_blank" rel="noreferrer" href="https://filipedev.ga/">
          Filipe Batista
        </a>{" "}
      </p>
      <p>
        para o evento{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://hacktoberfest.digitalocean.com"
        >
          Hacktoberfest 2021
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/invite/yvYXhGj"
        >
          DevChallenge
        </a>
      </p>
    </Styled.Container>
  );
};

export default Rodape;
