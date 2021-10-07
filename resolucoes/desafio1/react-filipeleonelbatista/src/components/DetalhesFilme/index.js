import { useEffect, useState } from "react";
import * as Styled from "./styles";

const DetalhesFilme = ({ data, handleReservar }) => {
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    if (data) setSelectedMovie(data);
  }, [data]);

  if (selectedMovie === {}) {
    return null;
  } else {
    return (
      <Styled.Container>
        <Styled.SectionTitle>Detalhes do filme</Styled.SectionTitle>

        <Styled.CardWrapper>
          <Styled.Movie
            style={{
              backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${selectedMovie.image})`,
            }}
          />
          <Styled.InformationContainer>
            <Styled.Title>{selectedMovie.title}</Styled.Title>
            <Styled.Description>{selectedMovie.description}</Styled.Description>
            <Styled.CTAButton onClick={() => handleReservar(selectedMovie.id)}>
              Reserve já!
            </Styled.CTAButton>
          </Styled.InformationContainer>
        </Styled.CardWrapper>
      </Styled.Container>
    );
  }
};

export default DetalhesFilme;
