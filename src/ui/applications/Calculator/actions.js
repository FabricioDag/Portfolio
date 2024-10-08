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


  // backup
  const [selectedAction, setSelectedAction] = useState('');

  const [mainNumber, setMainNumber] = useState(0)

  const [expressionNumberA, setExpressionNumberA] = useState()
  const [expressionNumberB, setExpressionNumberB] = useState()

  const [showEquals, setShowEquals] = useState(false)

  const [finishedCalc, setFinishedCalc] = useState(false)

  const resetMainNumber = () =>{
    setMainNumber(0)
  }

  const resetAll = () => {
    resetMainNumber()
    setExpressionNumberA()
    setExpressionNumberB()
    setSelectedAction('')
    setShowEquals(false)
  }

  // Click Number adiciona valor ao mainNumber
  const handleNumberClick = (value) => {
    if(finishedCalc){
      resetAll()
      setFinishedCalc(false)
    }
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
    if(finishedCalc){
      setExpressionNumberA(mainNumber)
      resetMainNumber()
      setExpressionNumberB()
      setShowEquals(false)
    }
    // se expressionA nao ta vazio entao, expressionB = mainNumber
    // else if(expressionNumberA && !expressionNumberB){
    //   setExpressionNumberB(mainNumber)
    // }
    
  };


  const handleActionEquals = () =>{
    alert('clickou equals')
    if(expressionNumberA){
      setExpressionNumberB(mainNumber)
      setMainNumber(expressionNumberA+mainNumber)
      setShowEquals(true)
    }
    setFinishedCalc(true)
  }