import logo from "./logo.svg";
import "./App.css";
import Media from "./Media";

function App() {
  const title = "Blog";
  let nrPosts = 100;
  const atencao = "Número de comentários";
  const comentarios = ["1", "2", "3", "4", "cinco", "zé", "pedro", "silva"];
  const comentarios2 = [
    { id: 1, texto: "Comentario sete" },
    { id: 2, texto: "Comentario sete" },
    { id: 3, texto: "Comentario sete" },
    { id: 4, texto: "Comentario sete" },
    { id: 5, texto: "Comentario sete" },
    { id: 6, texto: "Comentario sete" },
    { id: 7, texto: "Comentario sete" },
  ];
  const show = true;
  return (
    <>
      <h1 className="meuEstilo">{title}</h1>
      <p>Posts</p>
      <h3>Número de Posts: {nrPosts}</h3>

      {show ? <Media /> : "Sem dados"}
      <h4>
        {atencao.toUpperCase()}: {comentarios.length}
      </h4>
      <h5>
        {atencao.toUpperCase()}: {comentarios.length}
      </h5>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <h5>
        {atencao.toUpperCase()}: {comentarios.length}
      </h5>
      <ul>
        {comentarios2.map((comentario) => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
