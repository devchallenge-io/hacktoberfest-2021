import { useEffect, useState } from "react";
import api from "../../services/api";
import * as Styled from "./styles";

const DetalhesFilme = ({ data, handleReservar }) => {
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    async function loadSelectedMovie() {
      const url = `?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&region=BR`;
      const result = await api.get(`${data.id}${url}`);
      setSelectedMovie(result.data);
    }
    loadSelectedMovie();
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
              backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${selectedMovie.backdrop_path})`,
            }}
          />
          <Styled.InformationContainer>
            <Styled.Title>{selectedMovie.title}</Styled.Title>
            <Styled.Description>
              <strong>Lançamento em:</strong>
              {" " +
                new Date(selectedMovie.release_date).toLocaleDateString(
                  "pt-BR"
                )}
            </Styled.Description>
            <Styled.Description>
              <strong>Genero:</strong>
              {" " + selectedMovie.genres?.map((genre) => " " + genre.name)}
            </Styled.Description>
            <Styled.Description>
              <strong>Nota:</strong>
              {" " +
                selectedMovie.vote_average +
                ". Quantidade de votos: " +
                selectedMovie.vote_count}
            </Styled.Description>
            <Styled.Description>
              <strong>Sinopse:</strong>
              {" " + selectedMovie.overview}
            </Styled.Description>
            {data.showButton && (
              <Styled.CTAButton
                onClick={() => handleReservar(selectedMovie.id)}
              >
                Reserve já!
              </Styled.CTAButton>
            )}
          </Styled.InformationContainer>
        </Styled.CardWrapper>
      </Styled.Container>
    );
  }
};

export default DetalhesFilme;
