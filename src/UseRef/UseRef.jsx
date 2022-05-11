import { useRef } from 'react'


const UseRef = () => {
    
    const inputRef = useRef('null');

    const onClick = () => {
        inputRef.current.value = "";
        
    };

  return (
    <div>
        <h1>Hello</h1>
        <input 
        type="text" 
        placeholder="ex..." 
        ref={inputRef}
        />
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default UseRef