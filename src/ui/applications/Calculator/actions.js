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