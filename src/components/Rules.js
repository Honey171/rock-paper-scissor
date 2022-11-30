import React from 'react';
import rules from '../assets/image-rules.svg';

function Rules({ rulesModal, setRulesModal }) {
  return (
    <div className="w-[350px] rounded-lg h-[400px] bg-white z-50 absolute flex flex-col items-center justify-center">
      <p className="text-3xl pb-4 text-[#3B4162] tracking-wider">RULES</p>
      <img
        src={rules}
        alt=""
      />
      <button
        className="pt-11 text-2xl hover:text-[#3B4162]"
        onClick={() => setRulesModal(false)}
      >
        CLOSE
      </button>
    </div>
  );
}

export default Rules;
