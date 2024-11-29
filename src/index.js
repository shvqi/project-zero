import React from "react";
import ReactDOM from "react-dom/client";
function AnotherComponent() {
  return <h2>This is another component</h2>;
}

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <AnotherComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
