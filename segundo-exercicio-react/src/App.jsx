export default function App() {
    const world = "mundo"
    return (
        <div style={{backgroundColor: 'gray'}} className="App">
          <h1 style={{
            display: 'grid',
            minHeight: '100vh',
            placeContent: 'center',
            textAlign: "center"

          }}>Olá, {world}!</h1>
        </div>
      )
}