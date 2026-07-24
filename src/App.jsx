import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
      </Button>
    </div>
  );
};

export default App;