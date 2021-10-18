/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Detalhes from "../../components/Detalhes";
import Lista from "../../components/Lista";
import Rodape from "../../components/Rodape";
import api from "../../services/api";
import * as Styled from "./styles";

const Home = () => {
  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  useEffect(() => {
    async function handleLoadCharacteres() {
      const result = await api.get("character");
      setCharacterList(result.data.results);
      setSelectedCharacter(result.data.results[0]);
    }
    handleLoadCharacteres();
  }, []);

  return (
    <>
      <Styled.Header> Rick and Morty Character's List </Styled.Header>
      <Lista
        data={characterList}
        handleSelectCharacter={(charactere) => {
          setSelectedCharacter(charactere);
        }}
      />
      <Detalhes data={selectedCharacter} />
      <Rodape id="contato" />
    </>
  );
};

export default Home;
