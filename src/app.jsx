import React from "react";

export default function App() {
  const []useState=
  return (
    <>
      <header>
        <h2>Chinese Writing Wizard</h2>
        <p>{"<Description>"}</p>
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
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            aria-label="First name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Generate</button>
        </div>
      </header>
      <main class="container">
        <section id="Result">
          <h2>Result</h2>
          
        </section>
      </main>
    </>
  );
}
