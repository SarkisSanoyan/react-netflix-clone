import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App.jsx';
import MovieDetails from '../components/MovieDetails.jsx';

function MainRoutes() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;