import "./App.css"
import { Routes, Route } from "react-router-dom"
import AllMeetups from "./pages/AllMeetups"
import NewMeetup from "./pages/NewMeetup"
import Favorites from "./pages/Favorites"
import Layout from "./components/layout/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/newMeetup" element={<NewMeetup />} />
      </Routes>
    </Layout>
  )
}

export default App
