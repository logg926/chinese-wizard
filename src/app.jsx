import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            setResult(pre=>{
              
            })
            console.log(JSON.stringify(event));
          }}
        >
          <h2>Chinese Writing Wizard</h2>
          <p>{"<Description>"}</p>
          <h6>ABCD:</h6>
          <div className="grid">
            <select>
              <option value="" disabled>
                Select
              </option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <h6>ABCD:</h6>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <h6>ABCD:</h6>
            <input
              type="text"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Generate</button>
          </div>
        </form>
      </header>
      <main className="container">
        <section id="Result">
          <h2>Result</h2>
          {result.map((result) => {
            return (
              <article key={result}>
                <p>{result}</p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
