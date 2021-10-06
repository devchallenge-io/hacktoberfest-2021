import React from "react";
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import * as Styled from "./styles";

const destaquelist = [
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
];

const Destaques = () => {
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
          "infinite",
        ]}
        animationSpeed={1000}
      >
        {destaquelist.map((filme) => (
          <Styled.CardWrapper>
            <Styled.Movie style={{ backgroundImage: `url(${filme.image})` }} />
            <Styled.InformationContainer>
              <Styled.Title>{filme.title}</Styled.Title>
              <Styled.Description>{filme.description}</Styled.Description>
              <Styled.CTAButton>Reserve já!</Styled.CTAButton>
            </Styled.InformationContainer>
          </Styled.CardWrapper>
        ))}
      </Carousel>
    </Styled.Container>
  );
};

export default Destaques;
