
import "./HeaderStyle.css";
import React, { useState, useEffect } from "react"




const Header = () => {
    const [text, setText] = useState("")
    const [fullText, setFullText] = useState(
        "Welcome To the Quiz App"
      )
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        if (index < fullText.length) {
          setTimeout(() => {
            setText(text + fullText[index])
            setIndex(index + 1)
          }, 40)
        }
      }, [index])  

  return (
    <div className="header">
          {text}
         </div>
  )
}

export default Header