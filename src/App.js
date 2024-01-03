import React from "react";
import Description from "./component/Description";
import Image from "./component/Image";
import Name from "./component/Name";
import Price from "./component/Price";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import"./App.css"
function App() {
  const firstname="Ayoub Ben Saleh"
  return (
    <div className="App">
      <Card style={{ width: "25rem" }}>
        <Image variant="top" />

        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Price />
          </Card.Text>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <h3>Hello ,{firstname||"there!"}</h3>
    </div>
  );
}

export default App;
