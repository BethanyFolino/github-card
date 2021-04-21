import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/BethanyFolino")
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);

  const handleToggle = (e) => {
    console.log("Made you click!");
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div className="App">
      <style type="text/css">
        {`
            
            .button {
              background-color: orangered;
              color: white;
            }

            .mb-2 {
              background-color: orangered;
              color: white;
            }
            
            `}
      </style>
      {active ? (
        <Card
          bg="flat"
          text="white"
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.login}</Card.Text>
            <Card.Text>{user.location}</Card.Text>
            <Card.Text>{user.bio}</Card.Text>
          </Card.Body>
        </Card>
      ) : null}
      <Button className="button" variant="flat" onClick={handleToggle}>
        Toggle User
      </Button>
    </div>
  );
}

export default App;
