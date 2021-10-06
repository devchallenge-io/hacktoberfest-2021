import * as Styled from "./styles";

const selectedMovie = {
  title: "The Gentlemen1",
  description:
    "An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
  image: "https://source.unsplash.com/user/erondu/1600x900",
};

const DetalhesFilme = () => {
  return (
    <Styled.Container>
      <Styled.SectionTitle>Detalhes do filme</Styled.SectionTitle>

      <Styled.CardWrapper>
        <Styled.Movie
          style={{ backgroundImage: `url(${selectedMovie.image})` }}
        />
        <Styled.InformationContainer>
          <Styled.Title>{selectedMovie.title}</Styled.Title>
          <Styled.Description>{selectedMovie.description}</Styled.Description>
          <Styled.CTAButton>Reserve já!</Styled.CTAButton>
        </Styled.InformationContainer>
      </Styled.CardWrapper>
    </Styled.Container>
  );
};

export default DetalhesFilme;
