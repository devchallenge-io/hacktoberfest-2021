import React, { useEffect, useState } from "react";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import * as Styled from "./styles";

const Destaques = ({ data, handleReservar }) => {
  const [destaquesList, setDestaquesList] = useState([]);

  useEffect(() => {
    if (data) setDestaquesList(data);
  }, [data]);

  if (destaquesList.length === 0) {
    return null;
  } else {
    return (
      <Styled.Container>
        <Carousel
          plugins={[
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {destaquesList.map((filme, index) => (
            <Styled.CardWrapper key={index}>
              <Styled.Movie
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${filme.backdrop})`,
                }}
              />
              <Styled.InformationContainer>
                <Styled.Title>{filme.title}</Styled.Title>
                <Styled.Description>{filme.description}</Styled.Description>
                <Styled.CTAButton onClick={() => handleReservar(filme.id)}>
                  Reserve já!
                </Styled.CTAButton>
              </Styled.InformationContainer>
            </Styled.CardWrapper>
          ))}
        </Carousel>
      </Styled.Container>
    );
  }
};

export default Destaques;
