import { useState, useEffect, useReducer } from "react";
import "./App.css";
import { getRandomApí } from "./utils/getRandomAPi";

function App() {
  const [{ isLoading, error }, setAsyncInformation] = useState({
    isLoading: true,
    error: false,
  });
  const [info, setInfo] = useState<number | null>(null);
  const [requests, forceRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setAsyncInformation({
      error: false,
      isLoading: true,
    });
    getRandomApí()
      .then((value) => {
        setInfo(value as number);
      })
      .catch(() => {
        setAsyncInformation((prev) => ({
          ...prev,
          error: true,
        }));
      })
      .finally(() => {
        setAsyncInformation((prev) => ({
          ...prev,
          isLoading: false,
        }));
      });
  }, [requests]);

  return (
    <div className="App">
      <h1>{isLoading ? <>loading ...</> : <>Numero random {info}</>}</h1>
      <button onClick={forceRefetch} disabled={isLoading || error}>
        {error ? "Error" : "Refetch"}
      </button>
    </div>
  );
}

export default App;
