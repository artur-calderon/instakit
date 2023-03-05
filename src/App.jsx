import { GlobalStyle } from "../globalStyle"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainProfile } from "./Profiles/MainProfile"
import { JaqueProfile } from "./Profiles/JaqueCalderon"

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainProfile />} />
          <Route path="/jaquecalder0n" element={<JaqueProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
