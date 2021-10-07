import { useEffect, useState } from "react";
import * as Styled from "./styles";

const ListaFilmes = ({ title, data }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (data) setMovies(data);
  }, [data]);

  if (movies.length === 0) {
    return null;
  } else {
    return (
      <Styled.Container>
        <Styled.SectionTitle>{title}</Styled.SectionTitle>
        <Styled.ListContainer>
          {movies.map((filme, index) => (
            <Styled.ListItem
              key={index}
              style={{
                backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${filme.image})`,
              }}
            />
          ))}
        </Styled.ListContainer>
      </Styled.Container>
    );
  }
};

export default ListaFilmes;
