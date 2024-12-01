import { increment, decrement, reset, login, logout } from "./redux/action/actions"
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TowingCalculator from "./Components/Calculator";

export default function App(props) {
 
  return (
    <div className="">
      <TowingCalculator/>
    </div>
  );
}