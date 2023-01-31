import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

export default function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading]= useState(false);
  // get environment variables
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  console.log(OPENAI_API_KEY);

  // API config
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const generateResponse = async (event) => {
    const select = event.target[0].value;
    const topic = event.target[1].value;
    const gist = event.target[2].value;
    console.log(select, topic, gist)
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "透過" + select + ", " + "以" + topic + "為題" + ", 帶出" + gist + "\n\n###\n\n", // \n\n###\n\n is a stop sequence recognised by gpt-3
      // max_tokens: 256,
      // temperature: 0.7,
      // n: 1,
      // stop: OPENAI_STOP_WORD,
    });
    const response = completion.data.choices[0].text;

    // Debugging
    console.log("=====")
    console.log(`Response:\n${response}`)
    console.log("=====")
    return response;
  };

  return (
    <>
      <header>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            console.log(event);
            console.log(event.target[0].value);
            //call gpt 3
            await generateResponse(event);

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
              <option value="靜態描寫">靜態描寫</option>
              <option value="白描法">白描法</option>
              <option value="細描法">細描法</option>
              <option value="定點描寫">定點描寫</option>
              <option value="感官描寫">感官描寫</option>
              <option value="視覺描寫">視覺描寫</option>
              <option value="聽覺描寫">聽覺描寫</option>
              <option value="觸覺描寫">觸覺描寫</option>
              <option value="味覺描寫">味覺描寫</option>
              <option value="嗅覺描寫">嗅覺描寫</option>
              <option value="肖像描寫">肖像描寫</option>
              <option value="心理描寫">心理描寫</option>
              <option value="行動描寫">行動描寫</option>
              <option value="語言描寫">語言描寫</option>
              <option value="神態描寫">神態描寫</option>
              <option value="襯托">襯托</option>
              <option value="環境烘托">環境烘托</option>
              <option value="人物烘托">人物烘托</option>
              <option value="比喻（明喻、暗喻、借喻）">
                比喻（明喻、暗喻、借喻）
              </option>
              <option value="擬人">擬人</option>
              <option value="反覆">反覆</option>
              <option value="呼吿">呼吿</option>
              <option value="誇張">誇張</option>
              <option value="聯想">聯想</option>
              <option value="排比">排比</option>
              <option value="對比">對比</option>
              <option value="對偶">對偶</option>
              <option value="互文">互文</option>
              <option value="頂真">頂真</option>
              <option value="象徵">象徵</option>
              <option value="設問">設問</option>
              <option value="反問">反問</option>
              <option value="疊字">疊字</option>
              <option value="層遞">層遞</option>
              <option value="雙聲">雙聲</option>
              <option value="疊韻">疊韻</option>
              <option value="雙關">雙關</option>
              <option value="通感">通感</option>
              <option value="顏色詞">顏色詞</option>
              <option value="示現">示現</option>
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
            <button aria-busy={loading?"true":"false"}  type="submit">生成</button>
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
