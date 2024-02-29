import { useState } from 'react';
import './App.css';
import Button from './components/button'
import Container from './components/container';
function App() {
  const [lab, setLab]=useState(0);

  const handleClick1 = () => {
    alert('Button 1 clicked!');
  };

  const handleClick2 = () => {
    console.log('Button 2 clicked!');
  };

  const handleClick3 = () => {
    window.location.href = 'https://github.com/IlyaKash/web_lab';
  };

  function change_lab(num){
    setLab(num)
  }

  const  handleClick_lab2= ()=>{
    return (
      <Container>
        <h1>Лабараторная №2</h1>
        <Button onClick={handleClick1}>Alert</Button>
        <Button onClick={handleClick2}>Console</Button>
        <Button onClick={handleClick3}>GitGub</Button>
      </Container>
    )
  }

  const RenderList=props =>{
    const myArray=[
      {
        name: "lab1",
        number: 1,
      },
      {
        name: "lab2",
        number: 2,
      },
      {
        name: "lab3",
        number: 3,
      },
      {
        name: "lab4",
        number: 4,
      },
      {
        name: "lab5",
        number: 5,
      },
    ];

    return (
      <Container className="ContainerLeftMenu">
        <ul>
          {myArray.map(item=> (
            <li key={item.number}><Button onClick={() => change_lab(item.number)}>{item.name}</Button></li>
          ))}
        </ul>
      </Container>
    )
  }

  return (
    <div className="App">
      <header className="Head">
        <h1>Отчет по лабораторным, Кашкаров И.И. 4.105-1</h1>
      </header>
      <main>
        <div className="Left_menu">
          {RenderList()}
        </div>
        <div className="Content">
          {lab===1 && (
            <iframe src='/lab1/lab1.html' title='Lab1' width="80%" height="500px" />
          )}
          {lab===2 && handleClick_lab2()}
        </div>
      </main>
    </div>
  );
}

export default App;
