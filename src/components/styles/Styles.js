import styled from 'styled-components';
export const CalculatorStyles = styled.div`
backround-color: green;
width:100%;
min-height: 100vh;
.display{
    font-family: tahoma;
    width: 100%;
}
h1{
    font-size: 4rem;
    color: black;
}
.number-pad{
    width: 450px;
}
button{
    width: 100%;
    height: 80px;
    border: 3px solid green;
}
button.function-button{
    background-color: green;
}
button.white-button{
    background-color: white;
    color: green;
}
.zero-button{
    grid-column: 1/3
}
`;
export const DisplayStyles = styled.div`
display: grid;
grid-template-rows: 90px 50px;
grid-template-columns: 1fr;
backround-color: green;
width:100%;
min-height: 100vh;
h2,p{
    text-align: center;
    color: white;
}
h2{
    font-size: 2.5rem;
}
h2.long-main-display{
    font-size: 1.2rem;
}
p{
    margin: 5px 0;
}
p.long-stored-display{
    font-size: 0.5rem;
}
`;
