import {useState} from 'react';

const Inputstate = () => {
    const [inputValue, setInputValue] = useState("Monster");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

  return (
    <div>
        <br />
        <input placeholder="enter something" onChange={onChange} />
        {inputValue}
    </div>
  )
}

export default Inputstate