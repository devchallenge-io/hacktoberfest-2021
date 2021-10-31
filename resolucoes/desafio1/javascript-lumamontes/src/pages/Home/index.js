import movies from "../../movies.json";
import header from './components/Header'

function Home() {
  
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
        <h2>Em cartaz</h2>
      </section>

      <section>
        <h2>Programação - 10/10/2021</h2>
      </section>
    </div>
  );
}

export default Home;
