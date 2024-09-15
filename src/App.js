import { Routes, Route } from 'react-router-dom';
import Home from './Search/Home';
import Archive from './Arhive/Archive';
import ArchiveInput from './Arhive/ArchiveInput';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/archiveInput" element={<ArchiveInput />} />

    </Routes>
  );
};

export default App;
