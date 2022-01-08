import './App.css';
import GetData from './components/GetData/GetData';
import SendData from './components/SendData/SendData';

function App() {
  return (
    <div className="App">
      <div className='heading__container'><h1 className='app__heading'>Relay Testing App</h1></div>
      <div className='app__sendData'>
        <SendData/>
      </div>
      
      <GetData/>
    </div>
  );
}

export default App;
