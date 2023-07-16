import { Suspense, lazy } from "react";
import "./App.css";
import Face from "./components/Face";
const FaceD3 = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(import("./components/FaceD3"));
    }, 200);
  })
});
function App() {
  return (
    <div className="App">
      {/* <Face /> */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <FaceD3 />
      </Suspense>
    </div>
  );
}

export default App;
