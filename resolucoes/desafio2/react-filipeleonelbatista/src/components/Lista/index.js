import { useEffect, useState } from "react";
import * as Styled from "./styles";

const Lista = ({ data, handleSelectCharacter }) => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    if (data) setCharacterList(data);
  }, [data]);

  if (characterList.length === 0) {
    return null;
  } else {
    return (
      <Styled.Container>
        <Styled.SectionTitle>Personagens</Styled.SectionTitle>
        <Styled.ListContainer>
          {characterList?.map((personagem) => (
            <Styled.ListItem
              key={personagem.id}
              onClick={() => handleSelectCharacter(personagem)}
              style={{
                backgroundImage: `url(${personagem.image})`,
              }}
            />
          ))}
        </Styled.ListContainer>
      </Styled.Container>
    );
  }
};

export default Lista;
