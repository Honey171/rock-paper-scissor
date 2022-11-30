import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Rules from './components/Rules';

function App() {
  const [score, setScore] = useState(0);
  const [rulesModal, setRulesModal] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center m-0">
        {rulesModal && (
          <Rules
            rulesModal={rulesModal}
            setRulesModal={setRulesModal}
          />
        )}
        <div
          className={`pt-10 flex flex-col justify-center items-center ${
            rulesModal ? 'opacity-50 pointer-events-none' : ''
          } `}
        >
          <Header
            score={score}
            setScore={setScore}
          />
          <Menu
            score={score}
            setScore={setScore}
            rulesModal={rulesModal}
            setRulesModal={setRulesModal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
