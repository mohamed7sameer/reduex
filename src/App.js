import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, login,logout } from './store/actions';



function App() {
  const count = useSelector((state)=>{
    return state.counterReducer.count
  })
  const isLogin = useSelector((state)=>state.loggedReducer.logged)

  const dispatch = useDispatch()
  return (
    <div className="App">
      <header>
        <div>{count}</div>
        {!isLogin&&(
          <button onClick={()=>dispatch(login())}>login</button>
        )}
        {isLogin&&(
          <button onClick={()=>dispatch(logout())}>logout</button>
        )}
        
        
      </header>
      <div className='counter'>
        <button onClick={()=>dispatch(increment(2))}>+</button>
        <button onClick={()=>dispatch(decrement(2))}>-</button>
      </div>
    </div>
  );
}

export default App;
