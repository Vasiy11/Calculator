import React from 'react'; //Подключаем и импортируем react из зависимости react
import Calculator from './components/Calculator'; //Подключаем компонент Calculator из файла Calculator.js который находится в папке components
import NumberProvider from './components/NumberProvider'; //Подключаем компонент NumberProvider из файла NumberProvider.js который находится в папке components

const App = () => ( //Константа App она же стрелочная функция распечатывает компонент NumberProvider
    //Компонент NumberProvider сожержит внутри компонент Calculator, и передает туда свои данные 
    <NumberProvider> 
 <Calculator />
 </NumberProvider>
);

export default App; //Export default что компонент может экспортироваться и распечатываться в другие компоненты 
