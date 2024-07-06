import React, { useState } from "react";
export const NumberContext = React.createContext(); // из библиотеки React получаем функцию createContext
// Полученные данные вносятся в константу NumberContext. Export означает что константа NumberContext может быть передана в другой файл и там распечататься
const NumberProvider = (props) => {
  // Отрабатывает стрелочная функция которая внутри содержит аргументы props и передает в константу NumberProvider
  const [number, setNumber] = useState(""); //Вначале обрабатываеся useState, который находится после знака равно. useState - хук reacta, который хранит состояние в виде данных.
  //Все данные передаются в number
  const [storedNumber, setStoredNumber] = useState(""); //useState передает данные в storedNumber
  const [functionType, setFunctionType] = useState(""); //useState передает данные в functionType

  const handleSetDisplayValue = (num) => {
    //Константа handleSetDisplayValue получает некие цифры, обрабатывает их и передает в хук setNumber
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      //Идет проверка чтобы в цифрах небыло точки и длина числа была меньше 9
      setNumber(`${(number + num).replace(/^0+/, "")}`); //Если условие соблюдается то срабатывает setNumber который помещает обработанную цифру в константу number
    }
  };
  const handleSetStoredValue = () => {
    // Константа handleSetStoredValue через стрелочную функцию неполучает некаких параметры
    setStoredNumber(number); //Запускается setStoredNumber передает цифру в storedNumber
    setNumber(""); //setNumber при этом отправлят пустое значение в константу number
  };
  const handleClearValue = () => {
    //Очистка значений

    setNumber(""); //Через setNumber очищается Number
    setStoredNumber(""); //Через setStoredNumber очищается storedNumber
    setFunctionType(""); //Через setFunctionTYpe очищается functionType
  };
  const handleBackButton = () => {
    //Функция занимается стиранием последней цифры
    if (number !== "") {
      //Проверка условия если цифра не равна пустоте то срабатывает условие
      const deletedNumber = number.slice(0, number.length - 1); //Вначале обрабатывается правая часть после знака равно. У текущей цифры пропадает окончание. Все это помещается в константу deletedNumber
      setNumber(deletedNumber); //При помои setNumber с параметром deletedNumber у нас обновляется значение number
    }
  };
  const handleSetCalcFunction = (type) => { //Функция handleSetCalcFunction принимает аргумент type устанавливает тип операции
    if (number) { //Проверка если есть number 
      setFunctionType(type); //Через хук setFunctionType значение type передается functionType
      handleSetStoredValue();//Запускается handleSetStoredValue с пустыми параметрами
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };
  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };
  const doMath =() =>{
    if(number && storedNumber){
      switch(functionType){
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
          case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
          case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
          case '*':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 1000}`) / 1000}`);
          break;
          default:
            break;
      }
      setNumber('');
    }
  }
  return(
    <NumberContext.Provider
    value={{
      doMath,
      functionType,
      handleBackButton,
      handleClearValue,
      handleSetCalcFunction,
      handleSetDisplayValue,
      handleSetStoredValue,
      handleToggleNegative,
      number,
      storedNumber,
      setNumber,

    }}>
      {props.children}
    </NumberContext.Provider>
  )
};
export default NumberProvider;
