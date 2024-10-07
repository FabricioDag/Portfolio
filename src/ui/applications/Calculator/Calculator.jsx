import './Calculator.css';
import { useState } from 'react';

const Calculator = () => {

  const [selectedAction, setSelectedAction] = useState('');

  const [mainNumber, setMainNumber] = useState(0)

  const [expressionNumberA, setExpressionNumberA] = useState()
  const [expressionNumberB, setExpressionNumberB] = useState()

  const [showEquals, setShowEquals] = useState(false)

  const resetMainNumber = () =>{
    setMainNumber(0)
  }

  // Click Number adiciona valor ao mainNumber
  const handleNumberClick = (value) => {
    let newNumber = (mainNumber*10) + value;
    setMainNumber(newNumber);
  };


  // click em Action 
  // se expressionA vazio, expressionA = mainNumber
  // seta ação
  // reseta main number
  const handleActionClick = (action) => {
    if(!expressionNumberA){
      setExpressionNumberA(mainNumber)
      setSelectedAction(action)
      resetMainNumber()
    }
    // se expressionA nao ta vazio entao, expressionB = mainNumber
    else{
      setExpressionNumberA(mainNumber+expressionNumberA) // do calc
      resetMainNumber()
    }
    
  };


  const handleActionEquals = () =>{
    alert('clickou equals')
    if(expressionNumberA){
      setExpressionNumberB(mainNumber)
      setMainNumber(expressionNumberA+mainNumber)
      setShowEquals(true)
    }
  }
  

  return (
    <div className="Calculator application">
      <div className="calculusArea">
        <p className="teste">
          {expressionNumberA} {selectedAction} {expressionNumberB} {showEquals? '=': ''}
        </p>
        <p className="mainNumber">{mainNumber}</p>
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
        <div className="calculatorInput res">RES</div>
        <div className="calculatorInput equals" onClick={()=>handleActionEquals()}>=</div>
      </div>
    </div>
  );
};

export { Calculator };
