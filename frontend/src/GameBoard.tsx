import React, { useEffect, useState } from "react";

type Instructor = {
  level: string;
  piece: string;
};

const GameBoard: React.FC = () => {
  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [dialog, setDialog] = useState(
    "Welcome. Let's begin with control of the center."
  );

  useEffect(() => {
    const saved = localStorage.getItem("instructor");
    if (saved) {
      setInstructor(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="game-root">
        {/* LEFT SIDE: Chess board area (70%) */}
        <div className="game-board-area">
            <div className="board-wrapper">
            <div className="board-frame">
                {/* Checkerboard grid (64 squares) */}
                <div className="board-grid">
                    {Array.from({ length: 64 }).map((_, i) => {
                        const row = Math.floor(i / 8);
                        const col = i % 8;
                        const isDark = (row + col) % 2 === 1;

                        return (
                        <div
                            key={i}
                            className={`square ${isDark ? "dark" : ""}`}
                        />
                        );
                    })}
                </div>
                {/* Overlay layer for pieces, highlights, arrows, etc. */}
                <div className="board-overlay">
                {/* pieces */}
                </div>
            </div>
            </div>
        </div>

        {/* RIGHT SIDE: Instructor / mascot area (30%) */}
        <div className="instructor-area">
            {/* Speech / dialogue box */}
            <div className="speech-box">
            {/* Opening quotation mark */}
            <span className="quote left">“</span>

            {/* Instructor dialogue text */}
            <p>Your move. Control the center.</p>

            {/* Closing quotation mark */}
            <span className="quote right">”</span>
            </div>

            {/* Instructor mascot avatar */}
            <img
            src="/images/tiny_knight_white.png"
            className="mascot"
            alt="Instructor"
            />
        </div>
    </div>
  );
};

export default GameBoard;
