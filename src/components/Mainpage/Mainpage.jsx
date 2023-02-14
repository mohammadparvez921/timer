import React from 'react'
import { useState,useEffect} from 'react';
import useSound from 'use-sound';
import wrongSound from '../assets/wrong.mp3'
import correctSound from '../assets/correct-sound.mp3'
import './mainpage.css'
function Mainpage() {
    const data = [
        {
          id: 1,
          question: "Rolex is a company that specializes in what type of product?",
          answers: [
            {
              text: "Phone",
              correct: false,
            },
            {
              text: "Watches",
              correct: true,
            },
            {
              text: "Food",
              correct: false,
            },
            {
              text: "Cosmetic",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "When did the website `Facebook` launch?",
          answers: [
            {
              text: "2004",
              correct: true,
            },
            {
              text: "2005",
              correct: false,
            },
            {
              text: "2006",
              correct: false,
            },
            {
              text: "2007",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "Who played the character of harry potter in movie?",
          answers: [
            {
              text: "Johnny Deep",
              correct: false,
            },
            {
              text: "Leonardo Di Caprio",
              correct: false,
            },
            {
              text: "Denzel Washington",
              correct: false,
            },
            {
              text: "Daniel Red Cliff",
              correct: true,
            },
          ],
        },
      ];
      const [currentIndex,setIndex]=useState(0);
      const [playWrong]=useSound(wrongSound);
      const [playCorrect]=useSound(correctSound);
      const changeQuestion=()=>{
        setIndex(currentIndex===data.length-1?0:currentIndex+1);
      }
      const checkCorrect=(val)=>{
        if(data[currentIndex].answers[val].correct===true){
          playCorrect();

          setTimeout(changeQuestion,10000);
        }else{
          playWrong();
        }
      }
     
  return (
    <div className='mainpage'>
        <div className='question' >
          <h2>{data[currentIndex].question} </h2>
        </div>
        <div className='options'>
          <h5 onClick={()=>checkCorrect(0)}>{data[currentIndex].answers[0].text}</h5>
          <h5 onClick={()=>checkCorrect(1)}>{data[currentIndex].answers[1].text}</h5>
          <h5 onClick={()=>checkCorrect(2)}>{data[currentIndex].answers[2].text}</h5>
          <h5 onClick={()=>checkCorrect(3)}>{data[currentIndex].answers[3].text}</h5>
        </div>
      
    </div>
  )
}

export default Mainpage
