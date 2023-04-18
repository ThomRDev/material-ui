import "./App.css";
import { useRandom } from "./hooks/useRandom";

function App() {
  const query = useRandom();
  return (
    <div className="App">
      <h1>
        {query.isLoading || query.isFetching ? (
          <>loading ...</>
        ) : (
          <>Numero random {query.data}</>
        )}
      </h1>
      <button
        onClick={() => query.refetch()}
        disabled={query.isLoading || query.isError || query.isFetching}
      >
        {query.isError ? "Error" : "Refetch"}
      </button>
    </div>
  );
}

export default App;
