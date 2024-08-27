import './App.css';
import MainNews from './components/MainNews/MainNews';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Search from './components/Search/Search';
import Info from './components/Info/Info';
import Weather from './components/weather/Weather';

function App() {
  return (
    <>
      <MainNews />
      <Nav />
      <News />
      <Search />
      <Info />
      <Weather />
    </>
  );
}

export default App;
