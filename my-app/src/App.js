import './App.css';
import Button from './components/button'
import Container from './components/container';
function App() {

  const handleClick1 = () => {
    alert('Button 1 clicked!');
  };

  const handleClick2 = () => {
    console.log('Button 2 clicked!');
  };

  const handleClick3 = () => {
    window.location.href = 'https://example.com';
  };

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Container>
          <h1>Кашкаров И.И. 4.105-1</h1>
          <Button onClick={handleClick1}>button_1</Button>
          <Button onClick={handleClick2}>button_2</Button>
          <Button onClick={handleClick3}>button_3</Button>
        </Container>
      </main>
    </div>
  );
}

export default App;
