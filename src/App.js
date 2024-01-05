import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import MangaPage from './pages/MangaPage/MangaPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ChapterPage from './pages/ChapterPage/ChapterPage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element=<HomePage /> />
        <Route path='/manga/search' element=<SearchPage /> />
        <Route path='/manga/:id' element=<MangaPage /> />
        <Route path='/manga/:id/:chapterId' element=<ChapterPage /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
