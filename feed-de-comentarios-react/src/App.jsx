import { useState } from "react";

export default function App() {

  const [listComment, setListComment] = useState([])
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function sendComment(event) {
    event.preventDefault();

      const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
      }

      setListComment(state => [newComment, ...state])
      setAuthor("")
      setContent("")
    }
  return (
    <div id="app">
      <h2>Seção de Comentários</h2>

      <form onSubmit={sendComment}>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Digite seu Email"
          id="author" required
          />

        <label htmlFor="content">Comentario</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite seu comentário"
          cols="30" rows="6" required
          
          ></textarea>

        <button >Enviar comentário</button>
      </form>
      <hr />
      <section>
      <div id="comments">
      {listComment.length > 0
          ? (
            listComment.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            )))
          : (
            <p>Seja o primeiro a comentar!</p>
          )}

      </div>
      </section>
      

    </div>
  )
}
