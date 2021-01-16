import logo from "./logo.svg";
import "./App.css";
import mockData from "../mockdata";

/* MOCK DATA INFO

TAGS => TECHNOLOGIES
> lass uns doch einfach nach technologies filtern! tags machen vllt nicht so viel sinn mit lorem ipsum :)
> HTML, JavaScript, React, Node, Express, Bootstrap, MaterialUI, CSS, Typescript, SQL, MongoDB
> zusätlich haben wir ja ohnehin die normale Suchfunktion, mit der wir nach keywords in den Titeln suchen können - Titel sind dann "real", aka no veggie ipsum

SPICINESS
> mild, medium, hot, extra spicy

CODESNIPPET
> soll einfach ein db link sein zur jeweiligen resource, richtig? frage: wer erstellt die?
> ganz ehrlich: von mir aus kann das auch gern raus. es sei denn du möchtest das mit der markdown translation gern üben, dann go for it :)

IMAGE
> randomly assigned number, damit linken wir zur jeweils im backend/public folder abgespeicherten datei

DESCRIPTION + MAINTEXT
> würde den haupttext gern 2-teilen, dann können wir die description als eine art einleitung fett drucken
und vom hauptteil absetzen


*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
