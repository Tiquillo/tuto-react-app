function App() {
  return (
    <div
      style={{
        backgroundColor: "blueviolet",
        color: "white",
        padding: "1rem",
        borderRadius: "1rem",
        width: "fit-content",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>Registro</h1>
      <p>Regístrese con nosotros</p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          style={{
            width: "200px",
          }}
          placeholder="Nombre"
        />
        <input
          type="text"
          style={{
            width: "200px",
          }}
          placeholder="Apellido"
        />
        <button
          style={{
            width: "100px",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
