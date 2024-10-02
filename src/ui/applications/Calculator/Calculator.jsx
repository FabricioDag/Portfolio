import './Calculator.css';
import { useState } from 'react';

const Calculator = () => {
  const [actualNumber, setActualNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('0');
  const [selectedAction, setSelectedAction] = useState('+');

  const handleNumberClick = (value) => {
    let newNumber = actualNumber + value;
    setActualNumber(newNumber);
  };

  const handleActionClick = (value) => {
    setSelectedAction(value);

    if ((lastNumber !== '0' && actualNumber !== 0) || selectedAction == '!') {
      alert('ja tem numero no last number deveria fazer a ação');

      //switch case verifiando qual value da action chamando a função correspondente
      let newNumber = 0;
      switch (value) {
        case '+':
          alert('clicou em somar');
          newNumber = sum(parseFloat(lastNumber), parseFloat(actualNumber));
          break;
        case '-':
          alert('clicou em subtrair');
          newNumber = sub(parseFloat(lastNumber), parseFloat(actualNumber));
          break;
        case '*':
          alert('clicou em multiplicar');
          newNumber = mul(parseFloat(lastNumber), parseFloat(actualNumber));
          break;
        case '/':
          alert('clicou em dividir');
          newNumber = div(parseFloat(lastNumber), parseFloat(actualNumber));
          break;
        case '=':
          alert('clicou em igual');
          break;
        case '!':
          alert('factorial');
          newNumber = fac(lastNumber);
          break;
        default:
          alert('houve um erro');
      }

      setLastNumber(newNumber);
      setActualNumber('0');
    } else {
      setLastNumber(actualNumber);
      setActualNumber('0');
    }
  };

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

  return (
    <div className="Calculator application">
      <div className="calculusArea">
        <p className="teste">
          {lastNumber} {selectedAction}
        </p>
        <p className="numbers">{actualNumber}</p>
      </div>

      <div className="calculatorInputsArea">
        <div className="calculatorInput" onClick={() => handleNumberClick('7')}>
          7
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('8')}>
          8
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('9')}>
          9
        </div>

        <div className="calculatorInput del">DEL</div>

        <div className="calculatorInput" onClick={() => handleNumberClick('4')}>
          4
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('5')}>
          5
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('6')}>
          6
        </div>
        <div className="calculatorInput" onClick={() => handleActionClick('-')}>
          -
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('1')}>
          1
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('2')}>
          2
        </div>
        <div className="calculatorInput" onClick={() => handleNumberClick('3')}>
          3
        </div>
        <div className="calculatorInput" onClick={() => handleActionClick('+')}>
          +
        </div>

        <div className="calculatorInput">,</div>

        <div className="calculatorInput" onClick={() => handleNumberClick('0')}>
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
        <div className="calculatorInput equals">=</div>
      </div>
    </div>
  );
};

export { Calculator };
