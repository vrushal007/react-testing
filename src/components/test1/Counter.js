import React, {useState} from 'react'

function Counter({title}) {
  const [count,setCount] = useState(0)
	const incrementHandler = () => {
		setCount(count+1)
	}

  return (
    <div>
        <h1 data-testid="title">{title}</h1>
        <p data-testid="counter">{count}</p>
        <button data-testid="btn" onClick={incrementHandler}>Click</button>
    </div>
  )
}

export default Counter