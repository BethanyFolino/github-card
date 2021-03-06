import "./App.css";

function App() {
  function handleToggle() {
    fetch("https://api.github.com/users/BethanyFolino");
    console.log("Made you click!");
  }

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle User</button>
    </div>
  );
}

export default App;
