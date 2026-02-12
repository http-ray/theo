// ============================================================================
// PIECE CARD COMPONENT
// ============================================================================
// Displays educational content for a single chess piece.
// Shows: image, name, description, movement rules, capture rules, special rules.
// No raw coordinate lists — only clear, human-readable content.
// ============================================================================

import type { PieceInfo } from "./pieceData";
import styles from "../PieceGuide.module.css";

interface PieceCardProps {
  pieceInfo: PieceInfo;
}

const PieceCard = ({ pieceInfo }: PieceCardProps) => {
  const imageSrc = pieceInfo.imageSrc;

  return (
    <div className={styles["piece-card"]}>
      {/* Piece Image */}
      <div className={styles["piece-card-header"]}>
        <img 
          src={imageSrc} 
          alt={pieceInfo.name} 
          className={styles["piece-icon"]}
          onError={(e) => {
            console.error(`Failed to load image: ${imageSrc}`);
            e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><text y="32" font-size="32">♟</text></svg>';
          }}
        />
        <h3 className={styles["piece-name"]}>{pieceInfo.name}</h3>
      </div>

      {/* Description */}
      <p className={styles["piece-card-desc"]}>{pieceInfo.description}</p>

      {/* Movement Section */}
      <div className={styles["piece-section"]}>
        <h4 className={styles["section-title"]}>▸ How it moves</h4>
        <ul className={styles["section-list"]}>
          {pieceInfo.movementRules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Capture Section */}
      <div className={styles["piece-section"]}>
        <h4 className={styles["section-title"]}>▸ How it captures</h4>
        <ul className={styles["section-list"]}>
          {pieceInfo.captureRules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </div>

      {/* Special Rules Section */}
      {pieceInfo.specialRules.length > 0 && (
        <div className={styles["piece-section"]}>
          <h4 className={styles["section-title"]}>▸ Special rules</h4>
          <ul className={styles["section-list"]}>
            {pieceInfo.specialRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PieceCard;
