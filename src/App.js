import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/actions';



function App() {
  const count = useSelector((state)=>{
    return state.count
  })

  const dispatch = useDispatch()
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        <button>login</button>
      </header>
      <div className='counter'>
        <button onClick={()=>dispatch(increment(2))}>+</button>
        <button onClick={()=>dispatch(decrement(2))}>-</button>
      </div>
    </div>
  );
}

export default App;
