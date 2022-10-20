import React from "react";
import Card from "react-bootstrap/Card";
const index = () => {
  const smartPeople = [
    { name: "Johann Goethe", age: 82, IQ: 210 },
    { name: "Albert Einstein", age: 76, IQ: 205 },
    { name: "Leonardo da Vinci", age: 67, IQ: 180 },
    { name: "Isaac Newton", age: 84, IQ: 190 },
    { name: "James Maxwell", age: 48, IQ: 190 },
    { name: "Rudolf Clausius", age: 66, IQ: 190 },
    { name: "Nicolas Copernicus", age: 70, IQ: 160 },
    { name: "Gottfired Leibniz", age: 70, IQ: 182 },
    { name: "William Sidis", age: 46, IQ: 200 },
  ];
  const user = {
    firstName: "Elon",
    lastName: "Musk",
    age: 49,
  };
  const card = {
    title: "Elon Musk",
    description:
      "Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX",
    avatar: "http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg",
    cover:
      "https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elon-musk.jpg",
  };
  return (
    <div style={{ marginLeft: "0%" }}>
      <h1>Excersise 4</h1>
      <h1>4.1</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "15px",
            backgroundColor: "green",
            border: "1px solid black",
          }}
        >
          Green is the prime color of the world
        </div>
      </div>
      <h1>4.2</h1>
      <div>
        <button
          style={{ margin: "10px 10px" }}
          onClick={() => {
            alert("Alert");
          }}
        >
          Click me
        </button>
      </div>
      <h1>4.3</h1>
      <div>
        <ul>
          {smartPeople.map((item) => (
            <li key={item.name}>
              <h2>Name: {item.name}</h2>
              <p>Age: {item.age}</p>
              <p>IQ: {item.IQ}</p>
            </li>
          ))}
        </ul>
      </div>

      <h1>4.4</h1>
      <div style={{ marginLeft: "40%" }}>
        <Card style={{ width: "200px", border: "1px solid black" }}>
          <Card.Img
            style={{ height: "100px" }}
            variant="top"
            src={card.avatar}
          />
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h1>4.5</h1>
      <div>
        <h2>first Name : {user.firstName}</h2>
        <h2>last Name : {user.lastName}</h2>
        <h2>age : {user.age}</h2>
      </div>
      <h1>4.6</h1>
      <div
        style={{
          fontSize: "15px",
          backgroundColor: "green",
          border: "1px solid black",
        }}
      >
        Green is the prime color of the world
      </div>
      <h1>4.7</h1>
      <div>
        <form>
          <label>Enter a username:</label>
          <input />
        </form>
      </div>
    </div>
  );
};

export default index;
