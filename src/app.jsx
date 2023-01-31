import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState(["hi"]);
  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            console.log(event);
          }}
        >
          <h2>Chinese Writing Wizard</h2>
          <p>{"<Description>"}</p>
          <h6>ABCD:</h6>
          <div class="grid">
            <select>
              <option value="" disabled selected>
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
              type="email"
              name="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button type="submit">Generate</button>
          </div>
        </form>
      </header>
      <main class="container">
        <section id="Result">
          <h2>Result</h2>
          {result.map((result) => {
            return (
              <article>
                <p>{result}</p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
