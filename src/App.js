import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
           <Route path="/" element={ <HomePage />}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="/articles/:articleId" element={<ArticlePage/>}/>
           <Route path="/articlelist" element={<ArticleListPage/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
