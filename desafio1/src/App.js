
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState, useEffect } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [previusOperation, setPreviusOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      setPreviusOperation('+');
    } else if (operation === '='){
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(sum));
      setOperation('');
      setPreviusOperation('');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setFirstNumber(String(sum))
      setCurrentNumber('0');
    }
  };

  const handleSubtractNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      setPreviusOperation('-');
    } else if (operation === '='){
      const sub = Number(firstNumber) - Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(sub));
      setOperation('');
      setPreviusOperation('');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setFirstNumber(String(sub))
      setCurrentNumber('0');
    }
  };


  const handleMultiplyNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
      setPreviusOperation('*');
    } else if (operation === '='){
      const mul = Number(firstNumber) * Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(mul));
      setOperation('');
      setPreviusOperation('');
    } else {
      const mul = Number(firstNumber) * Number(currentNumber);
      setFirstNumber(String(mul))
      setCurrentNumber('0');
    }
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      setPreviusOperation('/');
    } else if (operation === '='){
      const division = Number(firstNumber) / Number(currentNumber);
      setFirstNumber('0');
      setCurrentNumber(String(division));
      setOperation('');
      setPreviusOperation('');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setFirstNumber(String(division))
      setCurrentNumber('0');
    }
  };

  useEffect(() => {
    if (operation === '=') {
      if (previusOperation === '+') {
        handleSumNumbers();
      } else if (previusOperation === '-') {
        handleSubtractNumbers();
      }
      else if (previusOperation === '*') {
        handleMultiplyNumbers();
      }
      else if (previusOperation === '/') {
        handleDivisionNumbers();
      }
    }
  });

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== ''){
      switch(operation){
        case '+':
          setOperation('=');
          break;
        case '-':
          setOperation('=');
          break;
        case '*':
          setOperation('=');
          break;
        case '/':
          setOperation('=');
          break;
        default:
          break;
      }
    }
  };


  return (
    <Container>
      <Content>
        <Input value={firstNumber} />
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="<-"/>
          <Button label="%"/>
          <Button label="/" onClick={handleDivisionNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultiplyNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleSubtractNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="e"/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label=","/>
          <Button label="=" onClick={() => handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
