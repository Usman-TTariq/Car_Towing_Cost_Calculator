import {increment, decrement, reset, login, logout} from "./redux/action/actions"
import { useSelector, useDispatch } from "react-redux";
import './App.css';


export default function App(props) {
  
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <h1>
         Hello World <br /> A little Redux Counter App Project
      </h1>

      <h3>Counter</h3>
      
      <div>
        <button onClick = {() => dispatch(increment())}>INCREMENT BY 1</button>
      </div>

      <div>
        <button onClick = {() => dispatch(decrement())}>DECREMENT BY 1</button>
      </div>

      <div>
            <button onClick={() => dispatch(reset())}>RESET</button>
      </div>

      <h3>{counter}</h3>

      <h3>Checking the User</h3>

      <div>
        <button onClick={() => dispatch(login())}>LOGIN</button>
      </div>

      <div>
        <button onClick={() => dispatch(logout())}>LOGOUT</button>
      </div>
      
      {
        auth ? (<div><p>User is LoggedIn.</p></div>) : (<div><p>User is LoggedOut.</p></div>)
      }
    </div>
  );
}