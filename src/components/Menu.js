import React, { useState, useEffect } from 'react';
import paper from '../assets/icon-paper.svg';
import scissor from '../assets/icon-scissors.svg';
import rock from '../assets/icon-rock.svg';
import triangle from '../assets/bg-triangle.svg';

function Menu({ score, setScore, rulesModal, setRulesModal }) {
  const [paperClicked, setPaperClicked] = useState(false);
  const [scissorClicked, setScissorClicked] = useState(false);
  const [rockClicked, setRockClicked] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [houseWon, setHouseWon] = useState(false);
  const [playerWon, setPlayerWon] = useState(false);
  const [draw, setDraw] = useState(false);
  const [randomN, setRandomN] = useState();

  const randomNumberHandler = () => {
    setRandomN(Math.trunc(Math.random() * 3 + 1));
  };
  const winnerHandler = () => {
    if (paperClicked && randomN === 1) {
      setDraw(true);
    } else if (scissorClicked && randomN === 2) {
      setDraw(true);
    } else if (rockClicked && randomN === 3) {
      setDraw(true);
    } else if (paperClicked && randomN === 2) {
      setHouseWon(true);
      setScore(score - 1);
    } else if (paperClicked && randomN === 3) {
      setPlayerWon(true);
      setScore(score + 1);
    } else if (scissorClicked && randomN === 1) {
      setPlayerWon(true);
      setScore(score + 1);
    } else if (scissorClicked && randomN === 3) {
      setHouseWon(true);
      setScore(score - 1);
    } else if (rockClicked && randomN === 1) {
      setHouseWon(true);
      setScore(score - 1);
    } else if (rockClicked && randomN === 2) {
      setPlayerWon(true);
      setScore(score + 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    randomNumberHandler();
  }, [randomN]);

  useEffect(() => {
    if (isGameStarted) {
      winnerHandler();
    }
    if (!isGameStarted) {
      setPaperClicked(false);
      setRockClicked(false);
      setScissorClicked(false);
      setHouseWon(false);
      setPlayerWon(false);
      setDraw(false);
    }
  }, [isGameStarted]);

  return (
    <>
      {isGameStarted && (
        <div className="flex flex-col pt-10 text-white">
          <div className="flex gap-x-16">
            <div className="text-center space-y-6">
              <img
                src={
                  paperClicked
                    ? paper
                    : '' || scissorClicked
                    ? scissor
                    : '' || rockClicked
                    ? rock
                    : ''
                }
                alt=""
                className={`rounded-[50%] py-6 px-6 border-[13px] md:py-11 md:px-11 md:border-[20px] border-solid bg-white shadow-2xl shadow-black z-10 cursor-pointer 
            ${paperClicked ? 'border-[#4865f4]' : ''}
            ${scissorClicked ? 'border-[#ec9e0e]' : ''}  
            ${rockClicked ? 'border-[#dc2e4e]' : ''}`}
              />
              <p>YOU PICKED</p>
            </div>
            <div className="text-center space-y-6">
              <img
                src={
                  randomN === 1
                    ? paper
                    : '' || randomN === 2
                    ? scissor
                    : '' || randomN === 3
                    ? rock
                    : ''
                }
                alt=""
                className={`rounded-[50%] py-6 px-6 border-[13px] md:py-11 md:px-11 md:border-[20px] border-solid bg-white shadow-2xl shadow-black z-10 cursor-pointer
            ${randomN === 1 ? 'border-[#4865f4]' : ''}
            ${randomN === 2 ? 'border-[#ec9e0e]' : ''}  
            ${randomN === 3 ? 'border-[#dc2e4e]' : ''}
            `}
              />
              <p>THE HOUSE PICKED</p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-14 space-y-3">
            {draw ? <p className="text-5xl">DRAW</p> : ''}
            {playerWon ? <p className="text-5xl">YOU WIN</p> : ''}
            {houseWon ? <p className="text-5xl">YOU LOSE</p> : ''}
            <button
              className="px-16 py-2.5 bg-white text-black rounded-md tracking-wider"
              onClick={() => {
                setIsGameStarted(false);
                setRandomN();
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}
      {!isGameStarted && (
        <div className="flex flex-row md:max-w-lg flex-wrap items-center justify-center md:gap-24 gap-7 pt-16">
          <img
            src={triangle}
            alt=""
            className="absolute z-0"
          />
          <img
            src={paper}
            alt=""
            className="rounded-[50%] py-10 px-10 border-[18px] border-solid bg-white border-[#4865f4] shadow-2xl shadow-black z-10 cursor-pointer hover:opacity-50"
            onClick={() => {
              setPaperClicked(true);
              setIsGameStarted(true);
            }}
          />
          <img
            src={scissor}
            alt=""
            className="rounded-[50%] py-10 px-10 border-[18px] border-solid bg-white border-[#ec9e0e] shadow-2xl shadow-black z-10 cursor-pointer hover:opacity-50"
            onClick={() => {
              setIsGameStarted(true);
              setScissorClicked(true);
            }}
          />
          <img
            src={rock}
            alt=""
            className="rounded-[50%] py-10 px-10 border-[18px] border-solid bg-white border-[#dc2e4e] shadow-2xl shadow-black z-10 cursor-pointer hover:opacity-50"
            onClick={() => {
              setIsGameStarted(true);
              setRockClicked(true);
            }}
          />
        </div>
      )}
      <div className="pt-20 pb-14">
        <button
          className="px-10 py-2 border rounded-lg tracking-wide text-white"
          onClick={() => setRulesModal(true)}
        >
          RULES
        </button>
      </div>
    </>
  );
}

export default Menu;
