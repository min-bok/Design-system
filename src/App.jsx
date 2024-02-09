import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inputs from "./page/Inputs";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/input/*" element={<Inputs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
