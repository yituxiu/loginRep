import logo from './logo.svg';
import './App.css';
import {createStore} from "redux"
function counter(state=0,action){
  switch (action.type){
    case "加法" :
      return state+1;
    case "减法" :
      return state-1;
    default :
      return 0;
  }
}
const actionTypeJia=()=>({type:"加法"})

const actionTypeJian=()=>({type:"加法"})

const store=createStore(counter);

store.subscribe(()=>{
  console.log(store.getState())
})

document.addEventListener("click",()=>{
  store.dispatch(actionTypeJian())
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
