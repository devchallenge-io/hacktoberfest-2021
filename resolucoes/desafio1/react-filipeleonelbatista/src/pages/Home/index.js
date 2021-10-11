/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Destaques from "../../components/Destaques";
import DetalhesFilme from "../../components/DetalhesFilme";
import ListaFilmes from "../../components/ListaFilmes";
import Modal from "../../components/Modal";
import Navegacao from "../../components/Navegacao";
import Rodape from "../../components/Rodape";
import api from "../../services/api";

const Home = () => {
  const url = `?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&region=BR&append_to_response=release_dates,videos`;
  const [destaquesList, setDestaquesList] = useState([]);
  const [topList, setTopList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [modalMovie, setModalMovie] = useState({});
  const [isShow, setIsShow] = useState(false);

  async function handleOpenModal(movie_id) {
    const result = await api.get(`${movie_id}${url}`);
    const classIndicativa = result.data.release_dates.results.filter(
      (classificacao) => classificacao.iso_3166_1 === "BR"
    );
    const trailer = result.data.videos.results.filter(
      (trailer) => trailer.iso_3166_1 === "BR"
    );
    setModalMovie({
      id: result.data.id,
      title: result.data.title,
      image: result.data.poster_path,
      backdrop: result.data.backdrop_path,
      description: result.data.overview,
      dtLancamento: result.data.release_date,
      genres: result.data.genres,
      duracao: result.data.runtime,
      classificacaoIndicativa:
        classIndicativa[0].release_dates[0].certification,
      trailer: trailer[0]?.key,
    });
    setIsShow(true);
  }

  function handleCloseModal() {
    setIsShow(false);
  }
  async function loadMovie(api_url, setDataFunction) {
    const result = await api.get(`${api_url}${url}`);

    if (result.data.results) {
      const resultArray = [];
      for (const movie of result.data.results) {
        resultArray.push({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
          backdrop: movie.backdrop_path,
          description: movie.overview,
          dtLancamento: movie.release_date,
        });
      }
      setDataFunction(resultArray);
    }
  }

  async function handleSelectMovie(id, showButton) {
    setSelectedMovie({
      id,
      showButton,
    });
  }

  useEffect(() => {
    loadMovie("upcoming", setDestaquesList);
    loadMovie("top_rated", setTopList);
    loadMovie("now_playing", setNowPlaying);
    loadMovie("popular", setPopular);
  }, []);

  useEffect(() => {
    if (destaquesList.length > 0) handleSelectMovie(destaquesList[0].id, true);
  }, [destaquesList]);

  return (
    <>
      <Modal isShow={isShow} data={modalMovie} handleClose={handleCloseModal} />
      <Navegacao
        handleReservar={handleOpenModal}
        disabled={!selectedMovie.showButton}
      />
      <Destaques
        id="destaques"
        data={destaquesList}
        handleReservar={handleOpenModal}
      />
      <ListaFilmes
        handleSelectMovie={handleSelectMovie}
        id="filmescartaz"
        title="Em cartaz"
        data={nowPlaying}
        showButton
      />
      <DetalhesFilme handleReservar={handleOpenModal} data={selectedMovie} />
      <ListaFilmes
        handleSelectMovie={handleSelectMovie}
        id="filmescartaz"
        title="Popular"
        data={popular}
      />
      <ListaFilmes
        handleSelectMovie={handleSelectMovie}
        id="filmescartaz"
        title="Melhores avalhações"
        data={topList}
      />
      <Rodape id="contato" />
    </>
  );
};

export default Home;
