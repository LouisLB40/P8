import { Header } from "./components/Header/header"
import { Footer } from "./components/Footer/footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Error } from "./components/Error/error"
import { Logement } from "./pages/Logement"
import {Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
