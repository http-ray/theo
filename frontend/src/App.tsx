import './App.css'
import { useState } from 'react'
import ExperienceSelect from './ExperienceSelect'
import GameBoard from './GameBoard'
import LessonReview from './LessonReview'
import PieceGuide from "./PieceGuide";

type GameData = {
  gameId: string;
  eloBucket: number;
  playerColor: 'white' | 'black';
  startFen: string;
};

function App() {
  const [currentScreen, setCurrentScreen] = useState<'select' | 'game' | 'review' | 'pieceGuide'>('select');
  const [gameData, setGameData] = useState<GameData | null>(null);
  
  const avatar = "public/images/theo_magical.png";
  
  const handleGameCreated = (data: GameData) => {
    setGameData(data);
    setCurrentScreen('game');
  };

  const handleBackToSelect = () => {
    setCurrentScreen('select');
    setGameData(null);
  };

  const handleGoToReview = () => {
    console.log('handleGoToReview called! Switching to review screen...');
    setCurrentScreen('review');
  };

  
  
  return (
    <div className='starfield'>
      {currentScreen === 'select' && (
        <>
          <ExperienceSelect onGameCreated={handleGameCreated} />
          <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <button
              onClick={() => setCurrentScreen('pieceGuide')}
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                color: '#fff',
                border: '2px solid #eebc4a',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                transition: 'background 0.3s, transform 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)')}
            >
              Chess Piece Guide
            </button>
          </div>
        </>
      )}
      {currentScreen === 'game' && gameData && (
        <GameBoard 
          avatar={avatar}
          gameId={gameData.gameId}
          eloBucket={gameData.eloBucket}
          playerColor={gameData.playerColor}
          startFen={gameData.startFen}
          onExit={handleBackToSelect}
          onGoToReview={handleGoToReview}
        />
      )}
      {currentScreen === 'review' && gameData && (
        <LessonReview 
          gameId={gameData.gameId}
          eloBucket={gameData.eloBucket}
          onNewLesson={handleBackToSelect}
        />
      )}
      {currentScreen === 'pieceGuide' && <PieceGuide onBack={() => setCurrentScreen('select')}/>}
    </div>
  )
}

export default App
