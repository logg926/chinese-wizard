import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);

  // get environment variables
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  console.log(OPENAI_API_KEY);

  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(
              event
            );
            
            //call gpt 3
            

            setResult((pre) => {
              return [...pre, "hi"];
            });
          }}
        >
          <h2>Chinese Writing Wizard</h2>
          <p>{"<Description>"}</p>
          <h6>學習重點:</h6>
          <div className="grid">
            <select>
              <option value="" disabled>
                學習重點
              </option>
              <option value="動態描寫">動態描寫</option>
            </select>
            <h6>題目:</h6>
            <input
              type="text"
              name="firstname"
              aria-label="First name"
              required
            />
            <h6>主旨:</h6>
            <input
              type="text"
              name="email"
              aria-label="Email address"
              required
            />
            <button type="submit">生成</button>
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
