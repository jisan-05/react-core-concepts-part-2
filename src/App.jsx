import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function clickHandler(){
    alert("Clicked work")
  }
  const clickHandler2 = () =>{
    alert('button 2 clicked')
  }

  return (
    
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={clickHandler}>Click Me</button>
      <button onClick={clickHandler2}>Click Me 2</button>
      <button onClick={()=>{alert("Third click")}}>Third click</button>
    </>
  )
}

export default App
