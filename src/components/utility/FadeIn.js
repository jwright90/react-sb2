import React, { useEffect, useState } from 'react'
import './FadeIn.css';

const FadeIn = ({ children, className, id }) => {

  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const handleClick = () => {
    setClicked(clicked => !clicked)
    console.log(clicked);
  }

  const handleClick2 = () => {
    setClicked2(clicked2 => !clicked2)
    console.log(clicked2);
  }

  useEffect(() => {
    const heading = document.querySelector('.fadein');
    heading.innerHTML = heading.innerText
      .split('')
      .map((letter, index) => `<span
      style='transition-delay: ${index * 500}ms' class='fade-span'>${letter}</span>`)
      .join('')

    return function cleanup() {
      const spans = document.querySelectorAll('.fade-span');
      spans.forEach(span => console.log(span.innerText))
      heading.innerHTML = heading.innerText
      console.log(heading.innerHTML)
    }
  }, [clicked])

  return (
    <div className="center">
      <h1 className={'fadein ' + className} id={id}>
        {children}
      </h1>
      <button onClick={handleClick}>Unmount</button>
      <button onClick={handleClick2}>Do Nothing</button>
    </div>
  )
}

export default FadeIn
