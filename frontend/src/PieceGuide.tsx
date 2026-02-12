import { useState } from "react";
import { PIECES, type PieceId } from "./components/pieceData";
import styles from "./PieceGuide.module.css";

const PieceGuide = ({ onBack }: { onBack: () => void }) => {
  const [selectedPiece, setSelectedPiece] = useState<PieceId>("king");

  // Find the selected piece object
  const piece = PIECES.find((p) => p.id === selectedPiece)!;

  return (
    <div className={styles.pageBackground}>
      <div className={styles.container}>
        <button className={styles.backButton} onClick={onBack}>
          Back to Home
        </button>
        <h2 className={styles.subtitle}>
          Learn how each chess piece moves, captures, and behaves. Select a piece to learn more.
        </h2>
        <div className={styles.selectorRow}>
          <label className={styles.selectorLabel}>
            Select a piece: 
            <select
              value={selectedPiece}
              onChange={(e) => setSelectedPiece(e.target.value as PieceId)}
              className={styles.dropdown}
            >
              {PIECES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.data.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img
              src={piece.data.imageSrc}
              alt={piece.data.name}
              className={styles.pieceImage}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className={styles.cardHeaderText}>
              <h3 className={styles.cardTitle}>{piece.data.name.toUpperCase()}</h3>
              <p className={styles.description}>{piece.data.description}</p>
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.sections}>
            <div className={styles.section}>
              <strong className={styles.sectionHeader}>▸ How it moves</strong>
              <ul>
                {piece.data.movementRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            <div className={styles.section}>
              <strong className={styles.sectionHeader}>▸ How it captures</strong>
              <ul>
                {piece.data.captureRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            {piece.data.specialRules.length > 0 && (
              <div className={styles.section}>
                <strong className={styles.sectionHeader}>▸ Special rules</strong>
                <ul>
                  {piece.data.specialRules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieceGuide;
