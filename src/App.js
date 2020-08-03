import React,{useState , useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

import './App.css';



const App = () => {
// state 
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true) // true by default
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`) // axios returns a promise
      
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])
// setting query as a dependency 
// this means that whenever query value changes, useEffect fires off.

  // when we use useEffect we need put dependencies as 2nd parameter
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
