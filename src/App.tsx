import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Builder from './pages/Builder';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/builder" element={<Builder />} />
    </Routes>
    <Footer />
  </>
)

export default App;
