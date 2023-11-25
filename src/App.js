import { Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Home from './routes/home/home.component';
import Template from './routes/template/template.component';
import ReturnToHome from './components/navbars/return-to-home/return-to-home.component';
import MyProfile from './routes/myprofile/myprofile.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <div><ReturnToHome /></div> }>
          <Route index element={<Home />} />
          
          {/* 
            Add pages here
            path is the subroute
            element is the page's component.
          */}
          <Route path='template' element={<Template />} />
          <Route path='myprofile' element={<MyProfile />} />
          



          {/* Any other path, just go to home page. */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
