import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useCounter, useLanguage} from './CustomHook.js';
import {useBookshelf} from './CustomHook.js';
import { useCarGallery  } from './CustomHook.js';
import { useExerciseList } from './CustomHook.js';
import data from './Nuri.json';

export default function Home(){

    const [name,setName] = useState("");
    // const [lang,setLang] = useState("En");//hook
    const {lang, langList, setLang, addLang, removeLastLang} = useLanguage([{name:"TR"}]);

    const {count,increment,decrement} = useCounter(5);
    const {exercises, addExercise, removeExercise} = useExerciseList([{name:"running"}]);
    const [books,addBook,removeBook]  = useBookshelf();
    const handleAddBook = () => {

      const newBook = { title:"", pages:" " }
      addBook(newBook);
      console.log(books)
    }

    const handleRemoveBook = (book) => {
      removeBook(book);
      console.log(books)
    }
   

    
    const { cars, addCar, removeCar } = useCarGallery([]);

  const handleAddCar = () => {
    addCar('Tesla');
    console.log(cars);
  };

  const handleRemoveCar = (index) => {
    removeCar(index);
    console.log(cars);
  };

    

  
    useEffect(()=>{
      console.log(data.value[0].image);
    },[count])

    return (<div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <h1> Arshya </h1>

        <h1>{count}</h1>

        <button onClick={() =>{
          addExercise({name:"Running"});      
          console.log(exercises);    
          increment();
        }}>
          {"Increment"}
        </button>

        <button onClick={() =>{
          removeExercise();
          console.log(exercises);    
          
          decrement();
        }}>
          {"Decrement"}
        </button>

        <div className="Emre">
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car}
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddCar}>Add Car</button>
    </div>

    </div>
    )
}