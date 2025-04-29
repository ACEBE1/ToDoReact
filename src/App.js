
import './App.css';

import Contacts from "./components/Contacts"
import Card from './components/Contacts/Card';
import DisplayUser from './components/Contacts/DisplayUser';
import Todo from './components/Contacts/todo/Todo';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Users from './components/Users';
import User from './components/User';
import Posts from './components/Posts';
import Post from './components/Post';
import Albums from './components/Albums';
import Album from './components/Album';
import { Tooltip } from 'reactstrap';
import Comments from './components/Comments';
import Comment from './components/Comment';
import Photos from './components/Photos';
import Photo from './components/Photo';
import Error from './components/Error';
import Signup from './components/Signup';
import ThemeContext, { ThemeProvider } from './contexts/ThemeContext';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import WeatherApp from './components/WeatherApp';





function App() {

  return (
    <ThemeProvider>
          <Router>
      <div>
        <Navbar/>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home/>} > </Route>
          <Route path="/about" element={<About/>} > </Route>
          <Route path="/users" element={<Users/>} >
             <Route index element={<p> Select A USER</p>} /> 
             <Route path=":id" element={<User/>}/>
           </Route>
          <Route path="/posts/" element={<Posts/>} > </Route>
          <Route path="/post/:id" element={<Post/>} > </Route>
          <Route path="/albums/" element={<Albums/>} > </Route>
          <Route path="/album/:id" element={<Album/>} > </Route>
          <Route path="/comments/" element={<Comments/>} > </Route>
          <Route path="/comment/:id" element={<Comment/>} > </Route>
          <Route path="/photos/" element={<Photos/>} > </Route>
          <Route path="/photo/:id" element={<Photo/>} > </Route>
          <Route path="/signup/" element={<Signup/>} > </Route>
          <Route path="/weather-app/" element={<WeatherApp/>} > </Route>

          
          <Route path="*" element={<Error/>} > </Route>

          

        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}



export default App;
