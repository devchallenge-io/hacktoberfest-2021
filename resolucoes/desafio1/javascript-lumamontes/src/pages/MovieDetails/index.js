import movies from "../../movies.json";

function MovieDetails() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cine<span>Imperator</span></h1>
        <nav>
          <ul>
            <li><a href="">x</a></li>
            <li><a href="/">y</a></li>
            <li><a href="/">z</a></li>
          </ul>
        </nav>
      </header>

      <section className="screen-container">
        <h1 className="movie-title">Título do filme</h1>
        <img src="" alt=""/>
      </section>

      <section>
            <p>Duração do filme: 1h</p>
            <p>Idioma Original: Inglês</p>
            <h3>Sinopse: </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id deleniti aliquid ad blanditiis aperiam sunt, autem nobis tenetur soluta repudiandae, vitae quos velit reprehenderit at maxime praesentium. Omnis, eius at!</p>
            <span className="title">Trailer</span>
      </section>
    </div>
  );
}

export default MovieDetails;
