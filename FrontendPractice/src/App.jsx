import About from "./components/FunctionalComponent/About"
import Home from "./components/FunctionalComponent/Home"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Contact"
import Navbar from "./components/FunctionalComponent/Navbar"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from "./components/FunctionalComponent/Signup"
import Login from "./components/FunctionalComponent/Login"
import UseState from "./components/FunctionalComponent/Hooks/UseState"
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect"
import UseRef from "./components/FunctionalComponent/Hooks/UseRef"
import UseCallback from "./components/FunctionalComponent/Hooks/Use Callback"
import UseReducer from "./components/FunctionalComponent/Hooks/useReducer"
import List from "./components/FunctionalComponent/Hooks/List"
function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/usestate" element={<UseState/>}></Route>
          <Route path="/useeffect" element={<UseEffect/>}></Route>
          <Route path="/useRef" element={<UseRef/>}></Route>
          <Route path="/UseCallback"element={<UseCallback/>}></Route>
          <Route path="/UseReducer"element={<UseReducer/>}></Route>
          <Route path="/List"element={<List/>}></Route>
    </Routes>
    
  </BrowserRouter>
  
  );
  }
  export default App;