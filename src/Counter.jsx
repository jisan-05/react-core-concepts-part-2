import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        let newCount = count+1;
        setCount(newCount)
    }
    const handleReduce =() => {
        if(count > 0){
            let newCount = count - 1;
            setCount(newCount)
        }
    }
    
    return (
        <div style={{border:'1px solid brown',padding:'30px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}