import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  const [btnclick, setBtnClick] = useState('');
  
const btnClickHandler = (e) => {
  setBtnClick(btnclick.concat(e.target.value));
}

const calculate = () => {
  
  try{
    // eslint-disable-next-line no-eval
    setBtnClick(eval(btnclick).toString());
  }
  catch {
    setBtnClick("Error")
  }
}

const clear = () => {
  setBtnClick('');
}

  return (
    <div className="App">

<div className="area"> {btnclick} </div>

<div className="calcWrapper">

<button className="btn" value={'clear'} onClick={clear} > C </button>
<button className="btn" value={'7'} onClick={btnClickHandler} > 7 </button>
<button className="btn" value={'8'} onClick={btnClickHandler} > 8 </button>
<button className="btn" value={'9'} onClick={btnClickHandler} > 9 </button>
<button className="btn" value={'/'} onClick={btnClickHandler} > / </button>
<button className="btn" value={'4'} onClick={btnClickHandler} > 4 </button>
<button className="btn" value={'5'} onClick={btnClickHandler} > 5 </button>
<button className="btn" value={'6'} onClick={btnClickHandler} > 6 </button>
<button className="btn" value={'*'} onClick={btnClickHandler} > * </button>
<button className="btn" value={'1'} onClick={btnClickHandler} > 1 </button>
<button className="btn" value={'2'} onClick={btnClickHandler} > 2 </button>
<button className="btn" value={'3'} onClick={btnClickHandler} > 3 </button>
<button className="btn" value={'-'} onClick={btnClickHandler} > - </button>
<button className="btn" value={'0'} onClick={btnClickHandler} > 0 </button>
<button className="btn" value={'.'} onClick={btnClickHandler} > . </button>
<button className="btn" value={'+'} onClick={btnClickHandler} > + </button>
<button className="equalBtn" value={'='} onClick={calculate} > = </button>

</div>

<footer className="footer">
<p>
  <b>Created by: <em>Nicholas H</em></b>
</p>
</footer>

    </div>
  );
}

export default App;