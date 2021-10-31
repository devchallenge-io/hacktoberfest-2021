import movies from "../../movies";
import Header from "../../components/Header"
import CurrentCard from "../../components/CurrentCard"
import ProgramCard from "../../components/ProgramCard"
import "./styles.css";

function Home() {

  return (
    <div className="App">
      <Header />

      <section className="screen-container">
        <h2>Em cartaz</h2>
        <div className="movies-container">
          {movies.map((movie) => {
            return <CurrentCard src={movie.photo_src} alt={movie.title} />;
          })}
        </div>
      </section>

      <section className="program-container">
        <h2>Programação - 10/10/2021</h2>
        <div>
        {movies.map((movie) => {
            return <ProgramCard src={movie.photo_src} alt={movie.title} titulo={movie.title} sala={movie.id} duracao={movie.duration}/>;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
