import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'

import { actionCreators } from './state/index'

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  // const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  const AC = bindActionCreators(actionCreators, dispatch)

  console.log(AC);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=> AC.depositMoney(1000)} >Deposit</button>
      <button onClick={()=> AC.withdrawMoney(1000)} >Withdraw</button>
    </div>
  );
}

export default App;
