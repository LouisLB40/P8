import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
