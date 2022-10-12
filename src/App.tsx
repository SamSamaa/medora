import Navbar from './components/Navbar';
import HeroText from './components/HeroText';

import './App.scss';
import ArticlCategories from './components/ArticleCategories';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <HeroText />
      <ArticlCategories />
    </div>
  )
}

export default App;
