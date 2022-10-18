import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='add' element={<AddCourse/>}></Route>
      <Route path='view' element={<ViewCourse/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
