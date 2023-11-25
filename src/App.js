import { Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}>
          {/* <Route index element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/map" element={<Map/>}/> */}
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
