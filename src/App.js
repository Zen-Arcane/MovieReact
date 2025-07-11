import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import SearchMovies from './components/SearchMovies';
import ViewAll from './components/ViewAll';
import MovieNav from './components/MovieNav';

function App() {
  return (
    <div>
      <Movies />
      <SearchMovies />
      <ViewAll/>
    </div>
  );
}

export default App;
