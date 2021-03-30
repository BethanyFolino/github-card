import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function App(props) {
  const [
    state = {
      user: {},
      active: false,
    },
    setState,
  ] = useState({});

  function handleToggle(props) {
    console.log("Made you click!");
    state.active = !state.active;
    fetch("https://api.github.com/users/BethanyFolino").then((res) => res.json)

    if (state.active === true) {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.state.avatar_url} />
          <Card.Body>
            <Card.Title>{props.state.name}</Card.Title>
            <Card.Subtitle>{props.state.login}</Card.Subtitle>
            <Card.Text>{props.state.location}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }

  return (
    <div className="App">
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userPicture} />
        <Card.Body>
          <Card.Title>{userName}</Card.Title>
          <Card.Subtitle>{userName}</Card.Subtitle>
        </Card.Body>
      </Card> */}
      <Button variant="info" onClick={handleToggle}>
        Toggle User
      </Button>
    </div>
  );
}

export default App;
