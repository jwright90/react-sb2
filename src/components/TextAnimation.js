import React from 'react'
import styled, { keyframes } from "styled-components"

function TextAnimation({ children }) {

  const word = { children }.children;
  const wordArray = word.split('');

  console.log(wordArray)

  return (
    <Wrapper> {
      wordArray.map((letter, index) => (
        <span key={index} style={{ animationDelay: 75 * index + "ms" }}>{letter}</span>
      ))
    }</Wrapper >
  )
}

export default TextAnimation

const animation = keyframes`
  0% {opacity: 0; transform: translateY(-100px); }
  25% {opacity: 1; transform: translateY(0px);}
  75% {opacity: 1; transform: translateY(0px);}
  100% {opacity: 0; transform: translateY(-100px);}
`

const Wrapper = styled.span`
  display:inline-block;
  white-space: pre;
  span {
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  }
`
