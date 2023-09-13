import { useState } from 'react';
import './App.css';

function App() {

const [inputValue , setInputValue]=useState('')



  return (
    <div className="container">
      <div className="calculator">
        <h1>calculator</h1>
        {/*  when ever the use clicks on a number it gets printed in the input above  */}

        <div className="input_value">
          <input type="text" value="fuck" />
        </div>

        <div className="numbers_grid">
          <div className="math_btn">
            <button className="btn symbols"> + </button>
            <button className="btn symbols"> - </button>
            <button className="btn symbols"> * </button>
            <button className="btn symbols"> / </button>
          </div>
          <button className="btn">
            <h4> C </h4> 
          </button>

          <button className="btn"> 0 </button>
          <button className="btn"> 1 </button>
          <button className="btn"> 2 </button>
          <button className="btn"> 3 </button>
          <button className="btn"> 4 </button>
          <button className="btn"> 5 </button>
          <button className="btn"> 6 </button>
          <button className="btn"> 7 </button>
          <button className="btn"> 8 </button>
          <button className="btn"> 9 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
