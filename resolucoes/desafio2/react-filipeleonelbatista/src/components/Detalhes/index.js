import { useEffect, useState } from "react";
import api from "../../services/api";
import * as Styled from "./styles";

const Detalhes = ({ data }) => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [episodesList, setEpisodesList] = useState([]);

  useEffect(() => {
    setSelectedCharacter(data);
  }, [data]);

  useEffect(() => {
    async function loadEp() {
      const base_ulr = "https://rickandmortyapi.com/api/";
      const epListUrl = selectedCharacter.episode.map((episode) =>
        episode.replace(base_ulr, "")
      );
      let episodesArray = [];
      for (const episode of epListUrl) {
        const result = await api.get(episode);
        episodesArray.push(result.data);
      }
      setEpisodesList(episodesArray);
    }
    loadEp();
  }, [selectedCharacter]);

  if (selectedCharacter === {}) {
    return null;
  } else {
    return (
      <Styled.Container>
        <Styled.SectionTitle>Detalhes do personagem</Styled.SectionTitle>

        <Styled.CardWrapper>
          <Styled.Movie
            style={{
              backgroundImage: `url(${selectedCharacter.image})`,
            }}
          />
          <Styled.InformationContainer>
            <Styled.Title>{selectedCharacter.name}</Styled.Title>

            <Styled.Description>
              <strong>Status:</strong>
              {" " + selectedCharacter.status}
            </Styled.Description>
            <Styled.Description>
              <strong>Espécie:</strong>
              {" " + selectedCharacter.species}
            </Styled.Description>
            <Styled.Description>
              <strong>Gênero:</strong>
              {" " + selectedCharacter.gender}
            </Styled.Description>
            <Styled.Description>
              <strong>Aparece nos episódios:</strong>
              <br />
              {episodesList?.map((episode) => (
                <p>
                  {`${episode.episode} - ${episode.name} `}
                  <strong>Exibido em </strong>
                  {new Date(episode.air_date).toLocaleDateString("pt-BR")}
                </p>
              ))}
            </Styled.Description>
          </Styled.InformationContainer>
        </Styled.CardWrapper>
      </Styled.Container>
    );
  }
};

export default Detalhes;
