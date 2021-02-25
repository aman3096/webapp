import logo from './logo.svg';
import {doLogin,getApi} from "modular-login-sdk/src/login"
import './App.css';
function App() {

  doLogin("123","fresh out","erweerw").then(data=>console.log(data))
  return (
    <div className="App">
      Random check Kindly check the console.log for it.
    </div>
  );
}

export default App;
