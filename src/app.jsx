import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            //call gpt 3
            setResult(pre=>{
              return [...pre, "hi"]
            })
            console.log(JSON.stringify(event));
          }}
        >
          <h2>Chinese Writing Wizard</h2>
          <p>{"<Description>"}</p>
          <h6>學習重點:</h6>
          <div className="grid">
            <select>
              <option value="" disabled>
                動態描寫
              </option>
              <option>靜態描寫</option>
              <option>白描法</option>
              <option>1</option>
              <option>1</option>
            </select>
            <h6>題目:</h6>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <h6>主旨:</h6>
            <input
              type="text"
              name="email"
              placeholder="Email address"
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
