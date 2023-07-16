import { Suspense, lazy } from "react";
import "./App.css";

const FaceD3 = lazy(() => {
  return new Promise((resolve) => {
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
