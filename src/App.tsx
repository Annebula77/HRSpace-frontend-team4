import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import Builder from './pages/Builder';
import Footer from './components/footer/Footer';
import NotFound from './pages/NotFound';

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const App = () => (
  <StyledSection>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/builder" replace />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </StyledSection>
);

export default App;
