import { useState, useEffect } from 'react'

function Display(props) {
  const [text, setText] = useState('Loading...');
  useEffect(() => {
    setTimeout(() => {
    setText(`現在のカウント: ${props.count}`);
    }, 2000);

  },[])

  return(
    <div>
      {text}
    </div>
  )
}

export default Display