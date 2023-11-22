import { Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Home from './routes/home/home.component';
import Template from './routes/template/template.component';
import ReturnToHome from './components/navbars/return-to-home/return-to-home.component';

const Test = () => {
  return (
    <div>
      TESTING!
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <div><ReturnToHome /></div> }>
          <Route index element={<Home />} />
          <Route path='template' element={<Template />} />
          <Route path='test' element={<Test />} />
          {/* Any other path, just go to home page. */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
