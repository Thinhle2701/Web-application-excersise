import React, { useState } from "react";
const Ex2 = () => {
  const [name, setName] = useState("Adam");
  const [age, setAge] = useState(35);

  return (
    <div style={{ marginLeft: "40%" }}>
      <>
        <h1>2.1</h1>
        <p>My name is {name}</p>
        <p>My age is {age}</p>

        <br></br>
        <h1>2.2</h1>
        <>
          <section>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>My name is {name}</p>
          </section>
          <section>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <p>My age is {age}</p>
          </section>
        </>
      </>
    </div>
  );
};

export default Ex2;
