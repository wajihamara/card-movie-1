// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import MoviesList from './MoviesList';
import Search from "./Search";


function App() {
 const [movies, setMovies] = useState([
   //  {
   //    name:'wajih',
   //    lastname:'wajih'
   //  }
   {
     image:
       "https://s2.gaming-cdn.com/images/products/7171/orig/tomb-raider-underworld-cover.jpg",
     name: "tombraider",
     rate: "5",
     description: "fchgvgjvb",
   },
   {
     image:
       "https://s2.gaming-cdn.com/images/products/7171/orig/tomb-raider-underworld-cover.jpg",
     name: "hitman",
     rate: "10",
     description: "gvb",
   },
   {
     image:
       "https://i.egycdn.com/pic/WmFwZndlY21ZbXZ0Y21FbXZtdWNtb2N2d3h3VFRmdw.jpg",
     name: "maxpayne",
     rate: "6",
     description: "hbvj",
   },
 ]);
 const[keyword,setKeyword]=useState("")
 const[newRate,setNewRate]=useState(1)
 const search=(x)=>{setKeyword(x) }
 const setRate=(rate)=>{setNewRate(rate)}

  return (
    <div className="App">
      <Search search={search} setRate={setRate} />
      <div className="list"><MoviesList movies={movies.filter(el=>el.name.toLowerCase().includes(keyword.toLowerCase().trim()))} /></div>
    
    </div>
  );
}

export default App;
