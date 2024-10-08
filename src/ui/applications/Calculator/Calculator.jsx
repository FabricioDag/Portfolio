import './Calculator.css';
import { useState } from 'react';

const Calculator = () => {

  const [mainNumber,setMainNumber] = useState(0)
  const [operation, setOperation] = useState('')
  const [lastNumber, setLastNumber] = useState()

  const resetMainNumber = () =>{
    setMainNumber(0)
  }
  
  const handleNumberClick = (value) =>{
    let newNumber = (mainNumber*10) + value;
    setMainNumber(newNumber);
  }

  const handleActionClick =(operation) =>{
    if(mainNumber!==0 && !lastNumber){
      setLastNumber(mainNumber)
      resetMainNumber()
      setOperation(operation)
    } else if(mainNumber!==0 && lastNumber){
      setLastNumber(doCalc)
      resetMainNumber()
      setOperation(operation)
    }
  }

  const handleActionEquals = () =>{
    setLastNumber(doCalc)
    resetMainNumber()
  }

  const sum = (valueA, valueB) => {
    return valueA + valueB;
  };

  const sub = (valueA, valueB) => {
    return valueA - valueB;
  };

  const mul = (valueA, valueB) => {
    return valueA * valueB;
  };

  const div = (valueA, valueB) => {
    return valueA / valueB;
  };

  const fac = (valueA) => {
    let aux = valueA;
    for (let i = valueA; i > 1; i--) {
      aux = aux * (i - 1);
    }
    return aux;
  };

  const doCalc = () =>{
    let newNumber = 0
    switch (operation) {
      case '+':
        newNumber = sum(parseFloat(lastNumber), parseFloat(mainNumber));
        break;
      case '-':
        newNumber = sub(parseFloat(lastNumber), parseFloat(mainNumber));
        break;
      case '*':
        newNumber = mul(parseFloat(lastNumber), parseFloat(mainNumber));
        break;
      case '/':
        newNumber = div(parseFloat(lastNumber), parseFloat(mainNumber));
        break;
      case '!':
        alert('factorial');
        newNumber = fac(lastNumber);
        break;
      default:
        alert('houve um erro');
    }
    return newNumber
  }

  return (
    <div className="Calculator application">
      <div className="calculusArea">
        {/* <p className="expression">expressao</p> */}
        <p className="mainNumber">{lastNumber} {operation} {mainNumber}  </p>
      </div>

      <div className="calculatorInputsArea">
        <div className="calculatorInput" onClick={() => handleNumberClick(7)}>
          7
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(8)}>
          8
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(9)}>
          9
        </div>

        <div className="calculatorInput del">DEL</div>

        <div className="calculatorInput" onClick={() => handleNumberClick(4)}>
          4
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(5)}>
          5
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(6)}>
          6
        </div>
        <div className="calculatorInput" onClick={() => handleActionClick('-')}>
          -
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(1)}>
          1
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(2)}>
          2
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick(3)}>
          3
        </div>
        <div className="calculatorInput" onClick={() => handleActionClick('+')}>
          +
        </div>

        <div className="calculatorInput">,</div>

        <div className="calculatorInput" onClick={() => handleNumberClick(0)}>
          0
        </div>
        <div className="calculatorInput" onClick={() => handleActionClick('/')}>
          /
        </div>

        <div className="calculatorInput" onClick={() => handleActionClick('*')}>
          x
        </div>

        <div className="calculatorInput" onClick={() => handleActionClick('!')}>
          !
        </div>
        <div className="calculatorInput res" onClick={() => resetAll()}>RES</div>
        <div className="calculatorInput equals" onClick={()=>handleActionEquals()}>=</div>
      </div>
    </div>
  );
};

export { Calculator };
