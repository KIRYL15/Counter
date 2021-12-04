import React, {useState} from 'react';
import './App.css';
import {Table} from "./Components/Counter";

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <Table
                count={count}
                setCount={setCount}
            />
        </div>
    );
}

export default App;
