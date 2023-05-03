
import { useState } from "react";


export function useCounter(initialValue){
    const [count,setCount] = useState(initialValue);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
    }

    return {count , increment , decrement};
   

}


//Nuri
export function useLanguage(initialValue){
    //{name:"",words:15165864451}
    const [lang,setLang] = useState(initialValue);
    const [langList, setLangList] = useState([initialValue])

    function addLang(newLang){
        setLangList([...langList, newLang]);
        console.log(langList)
    };

    function removeLastLang(){
        //1 2 3 4 5
        let [temp2 , ...temp] = langList
       setLangList(temp);
       console.log(langList)
    }
    return {lang, langList, setLang, addLang, removeLastLang}
}


//Alberto
export function useBookshelf(){
    //{name:"hu",page:25}
    const [books,setBooks] = useState([]);
    
    const addBook = (book) => {
        setBooks([...books,book]);
    }
    
    const removeBook = () => {
        let [temp2 , ...temp] = books;
        setBooks(temp);
    }
    
    return [books, addBook, removeBook];
};

//Ola
export function useExerciseList(initialValue){
    const [exercises, setExercises] = useState(initialValue);
    
    function addExercise(newExercise) {
        setExercises([...exercises, newExercise]);
    }
    
    function removeExercise() {
        let [temp2 , ...temp] = exercises;
        setExercises(temp);
    }

    return {exercises, addExercise, removeExercise};
}

//Emre
export function useCarGallery(initialValue) {
    const [cars, setCars] = useState(initialValue);
  
    function addCar(model) {
        setCars([...cars, model]);
    }
  
    function removeCar(index) {
      const newCars = [...cars];
      newCars.splice(index, 1);
      setCars(newCars);
    }
  
    return { cars, addCar, removeCar };
  }
    
