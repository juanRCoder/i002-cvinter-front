import { RouterProvider } from "react-router-dom";
import router from "./application/routes/routes";
import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>

  );
}

export default App;
