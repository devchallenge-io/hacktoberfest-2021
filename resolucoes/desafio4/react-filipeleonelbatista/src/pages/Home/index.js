import React, { useEffect, useState } from "react";
import Speech from "react-speech";
import axios from "axios";
import * as Styled from "./styles";
import Rodape from "../../components/Rodape";

const Home = () => {
  const bgPhoto = "https://source.unsplash.com/collection/2281806/1600x900";

  const [quote, setQuote] = useState({
    q: "Esteja onde seu inimigo não está.",
    a: "Sun Tzu",
    h: "<blockquote>&ldquo;Esteja onde seu inimigo não está.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
  });

  useEffect(() => {
    async function handleLoadCharacteres() {
      const url = "https://zenquotes.io?api=random";
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const result = await axios.get(
        process.env.NODE_ENV === "development" ? proxy + url : url
      );
      let resultquote = result.data[0];
      const translate = await axios.post(
        "https://libretranslate.de/translate",
        {
          q: resultquote.q,
          source: "en",
          target: "pt",
        }
      );
      resultquote.q = translate.data.translatedText;
      setQuote(resultquote);
    }
    handleLoadCharacteres();
  }, []);

  return (
    <Styled.Container style={{ backgroundImage: `url(${bgPhoto})` }}>
      <Styled.MessageWrapper>
        <Styled.Quote>{quote.q}</Styled.Quote>
        <Styled.Autor>Autor: {quote.a}</Styled.Autor>
      </Styled.MessageWrapper>
      <Speech
        text={quote.q}
        textAsButton
        displayText="OUVIR"
        lang="pt-BR"
        voice="Daniel"
      />
      <Rodape />
    </Styled.Container>
  );
};

export default Home;
