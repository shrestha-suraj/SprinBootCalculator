import React,{useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';

const App=()=> {

  const [numberField,setNumberField]=useState('')

  const buttonClick=(btnString)=>{
    if(btnString==="="){
      return 
    }
    if(btnString==='C'){
      return setNumberField('')
    }
    if(numberField.length===19){
      return
    }
    setNumberField(numberField+btnString)
  }

  return (
    <div className="App"> 
      <div className="calculatorFrame">
        <div className="screenView">
          <div className="screen">
            <h1>{numberField}</h1>
          </div>
          
        </div>
        <div className="buttonPanel">
          <div className="buttonContainer">
              <div style={{gridArea:'zero'}} className="eachButton" onClick={()=>buttonClick('0')}>
                <h1 style={{color:'white'}}>0</h1>
              </div>
              <div style={{gridArea:'one'}} className="eachButton" onClick={()=>buttonClick('1')}>
                <h1 style={{color:'white'}}>1</h1>
              </div>
              <div style={{gridArea:'two'}} className="eachButton" onClick={()=>buttonClick('2')}>
                <h1 style={{color:'white'}}>2</h1>
              </div>
              <div style={{gridArea:'three'}} className="eachButton" onClick={()=>buttonClick('3')}>
                <h1 style={{color:'white'}}>3</h1>
              </div>
              <div style={{gridArea:'four'}} className="eachButton" onClick={()=>buttonClick('4')}>
                <h1 style={{color:'white'}}>4</h1>
              </div>
              <div style={{gridArea:'five'}} className="eachButton" onClick={()=>buttonClick('5')}>
                <h1 style={{color:'white'}}>5</h1>
              </div>
              <div style={{gridArea:'six'}} className="eachButton" onClick={()=>buttonClick('6')}>
                <h1 style={{color:'white'}}>6</h1>
              </div>
              <div style={{gridArea:'seven'}} className="eachButton" onClick={()=>buttonClick('7')}>
                <h1 style={{color:'white'}}>7</h1>
              </div>
              <div style={{gridArea:'eight'}} className="eachButton" onClick={()=>buttonClick('8')}>
                <h1 style={{color:'white'}}>8</h1>
              </div>
              <div style={{gridArea:'nine'}} className="eachButton" onClick={()=>buttonClick('9')}>
                <h1 style={{color:'white'}}>9</h1>
              </div>
              <div style={{gridArea:'plus'}} className="eachButton" onClick={()=>buttonClick('+')}>
                <h1 style={{color:'white'}}>+</h1>
              </div>
              <div style={{gridArea:'minus'}} className="eachButton" onClick={()=>buttonClick('-')}>
                <h1 style={{color:'white'}}>-</h1>
              </div>
              <div style={{gridArea:'multiply'}} className="eachButton" onClick={()=>buttonClick('x')}>
                <h1 style={{color:'white'}}>x</h1>
              </div>
              <div style={{gridArea:'divide'}} className="eachButton" onClick={()=>buttonClick('/')}>
                <h1 style={{color:'white'}}>/</h1>
              </div>
              <div style={{gridArea:'equals'}} className="eachButton" onClick={()=>buttonClick('=')}>
                <h1 style={{color:'white'}}>=</h1>
              </div>
              <div style={{gridArea:'clear'}} className="eachButton" onClick={()=>buttonClick('C')}>
                <h1 style={{color:'red'}}>C</h1>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;