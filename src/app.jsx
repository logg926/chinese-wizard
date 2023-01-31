import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  return (
    <>
      <header>
        <form
          onSubmit={(event) => {
            //call gpt 3
            setResult((pre) => {
              return [...pre, "hi"];
            });
            console.log(JSON.stringify(event));
          }}
        >
          <h2>Chinese Writing Wizard</h2>
          <p>{"<Description>"}</p>
          <h6>學習重點:</h6>
          <div className="grid">
            <select>
              <option value="" disabled>學習重點</option>
              <option value="動態描寫">動態描寫</option>
              <option 靜態描寫</option>
              <option>白描法</option>
              <option>細描法</option>
              <option>定點描寫</option>
              <option>感官描寫</option>
              <option>視覺描寫</option>
              <option>聽覺描寫</option>
              <option>觸覺描寫</option>
              <option>味覺描寫</option>
              <option>嗅覺描寫</option>
              <option>肖像描寫</option>
              <option>心理描寫</option>
              <option>行動描寫</option>
              <option>語言描寫</option>
              <option>神態描寫</option>
              <option>襯托</option>
                環境烘托
                人物烘托
                比喻（明喻、暗喻、借喻）
擬人
反覆
呼吿
誇張
聯想
排比
對比
對偶
互文
頂真
象徵
設問
反問
疊字
層遞
雙聲
疊韻
雙關
通感
顏色詞
示現

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
