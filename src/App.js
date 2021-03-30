import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "bootstrap";

function App() {
  this.state = { user: {}, active: false };

  function handleToggle() {
    console.log("Made you click!");
    fetch("https://api.github.com/users/BethanyFolino").then(
      this.state.user == "BethanyFolino"
    );
    !this.state.active;
  }

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{this.state.avatar_url}</Card.Title>
          <Card.Subtitle>{this.state.user}</Card.Subtitle>
        </Card.Body>
        <Button variant="info" onClick={handleToggle}>
          Toggle User
        </Button>
      </Card>
    </div>
  );
}

export default App;
