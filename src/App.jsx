import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inputs, Presentations } from "./page";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/input/*" element={<Inputs />} />
          <Route path="/presentation/*" element={<Presentations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
