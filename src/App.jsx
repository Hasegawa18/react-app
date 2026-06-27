import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './components/Button/Button.jsx'

function App() {
  const handleClick = () => {
    console.log('ボタンがクリックされました');
  }

  return(
    <>
    <h1>Hello, World!</h1>
    <Button type="submit" disabled={false} onClick={handleClick}>
      ボタンをクリック
      </Button>
    </>
  )
}

export default App
