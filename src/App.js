import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png"
        alt=""
      />
      <div className="container">
        <h1>Paras Khekre</h1>
        <p>
          Maximo Developer. When not coding I like to play valorant games to
          relax myself but I end up getting angry and cranky after getting
          ragebaited and abused by other players.{" "}
        </p>
        <Skills skillName="HTML+CSS" colorName="lightblue" emoji="🐤" />
        <Skills skillName="Javascript" colorName="yellow" emoji="🐤" />
        <Skills skillName="React" colorName="red" emoji="🐤" />
        <Skills skillName="Tailwind" colorName="aqua" emoji="🐤" />
      </div>
    </div>
  );
}

function Skills({ skillName, colorName, emoji }) {
  return (
    <>
      <span className="skill" style={{ backgroundColor: colorName }}>
        {skillName} {emoji}
      </span>
    </>
  );
}
