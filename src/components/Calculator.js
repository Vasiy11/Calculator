import React from 'react';
import {CalculatorStyles} from './styles/Styles';
import Display from './Display'

const Calculator = () =>(
    <CalculatorStyles>
    <div className='display'>
     <h1>  Калькулятор </h1>
     <Display/>
         </div>
         </CalculatorStyles>
);
export default Calculator;

