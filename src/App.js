import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({ User: {}, active: false });

  function getUser(username) {
    return (fetch("https://api.github.com/user/BethanyFolino"),
    {
      method: "GET",
      headers: { Accept: "application/vnd.github.v3+json" },
      body: json.stringify({
        name,
        email,
        avatar_url,
        location,
      }),
    }).then((res) => setUser(res.json()));
  }

  function handleToggle() {
    console.log("Made you click!");
    //toggle active when button is clicked
    user.active = !user.active;
    //fetch my Github info
    getUser();
    if (user.active === true) {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle>{user.location}</Card.Subtitle>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }

  return (
    <div className="App">
      <Button variant="info" onClick={handleToggle}>
        Toggle User
      </Button>
    </div>
  );
}

export default App;
