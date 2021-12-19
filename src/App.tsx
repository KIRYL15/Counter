import React, {useState} from 'react';
import './App.css';
import {Table} from "./Components/Counter";

function App() {
    const [inc, setInc] = useState(0)

    // const setLocalStorageHandler = () => {
    //     localStorage.setItem('counterValue', JSON.stringify(inc))
    //     localStorage.setItem('counterValue+1', JSON.stringify(inc+1))
    //
    // }
    // const getLocalStorageHandler = () => {
    //     let valueAsString=localStorage.getItem('counterValue')
    //     if(valueAsString){
    //     let newValue=JSON.parse(valueAsString)
    //         setInc(newValue)
    //     }
    // }
    // const clearLocalStorageHandler = () => {
    //   localStorage.clear()
    //     setInc(0)
    // }
    // const removeLocalStorageHandler = () => {
    //   localStorage.removeItem('counterValue+1')
    //     //setInc(0)
    // }


    return (

        <div className="App">
            {/*<button onClick={setLocalStorageHandler}>setLocalStorage</button> запись
            <button onClick={getLocalStorageHandler}>getLocalStorage</button> добавление
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button> очистка всех значений
            <button onClick={removeLocalStorageHandler}>removeLocalStorage</button> очистка всех значений*/}
            <Table
                inc={inc}
                setInc={setInc}
            />
        </div>
    );
}

export default App;
