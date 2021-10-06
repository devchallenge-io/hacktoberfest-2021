import * as Styled from "./styles";

const topMovies = [
  {
    title: "The Gentlemen1",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen2",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen3",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen4",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen5",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen6",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen5",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen6",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
  {
    title: "The Gentlemen5",
    description:
      "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    image: "https://source.unsplash.com/user/erondu/1600x900",
  },
];

const ListaFilmes = () => {
  return (
    <Styled.Container>
      <Styled.SectionTitle>Top Filmes</Styled.SectionTitle>
      <Styled.ListContainer>
        {topMovies.map((filme) => (
          <Styled.ListItem style={{ backgroundImage: `url(${filme.image})` }} />
        ))}
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default ListaFilmes;
