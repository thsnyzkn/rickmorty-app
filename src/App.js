import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersPage from "./components/pages/Characters.page";
import CharacterDetailPage from "./components/pages/CharacterDetail.page";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path=":characterId" element={<CharacterDetailPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
