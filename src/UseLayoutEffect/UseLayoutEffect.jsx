import { useLayoutEffect, useEffect, useRef } from 'react'

const UseLayoutEffect = () => {

    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "HELLO";
    }, [])

  return (
    <div className='app'>
        <input ref={inputRef} defaultValue="Pontus "style={{width: 400, height: 150}} />
    </div>
  )
}

export default UseLayoutEffect