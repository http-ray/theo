// Chess piece data for the movement guide

export const PIECE_DATA = {
  king: {
    name: 'King',
    description: 'The most important piece — protect it at all costs!',
    movementRules: [
      'Moves exactly one square in any direction',
      'Can move horizontally, vertically, or diagonally',
      'Cannot move into check (attacked squares)'
    ],
    captureRules: [
      'Captures the same way it moves',
      'Takes one square in any direction'
    ],
    specialRules: [
      'Castling: King and rook swap positions under special conditions',
      'Can castle kingside (short castle) or queenside (long castle)',
      'Cannot castle if king has moved, rook has moved, or king is in check',
      'The king cannot move through or into check'
    ],
    imageSrc: '/images/Tiny_King_White.png',
  },
  queen: {
    name: 'Queen',
    description: 'The most powerful piece on the board.',
    movementRules: [
      'Moves any number of squares in any direction',
      'Combines the movement of rook and bishop',
      'Can move horizontally, vertically, or diagonally'
    ],
    captureRules: [
      'Captures the same way it moves',
      'Can capture any piece in its path'
    ],
    specialRules: [
      'Cannot jump over other pieces',
      'Movement is blocked by the first piece in its path',
      'Use the queen wisely — it\'s valuable but also a target'
    ],
    imageSrc: '/images/Tiny_Queen_White.png',
  },
  rook: {
    name: 'Rook',
    description: 'A powerful piece that controls ranks and files.',
    movementRules: [
      'Moves any number of squares horizontally or vertically',
      'Cannot move diagonally',
      'Travels in straight lines only'
    ],
    captureRules: [
      'Captures the same way it moves',
      'Takes pieces along its rank or file'
    ],
    specialRules: [
      'Cannot jump over other pieces',
      'Participates in castling with the king',
      'Rooks become especially strong in open files and endgames'
    ],
    imageSrc: '/images/Tiny_Rook_White.png',
  },
  bishop: {
    name: 'Bishop',
    description: 'A long-range piece that controls diagonals.',
    movementRules: [
      'Moves any number of squares diagonally',
      'Must stay on the same color squares throughout the game'
    ],
    captureRules: [
      'Captures the same way it moves',
      'Takes pieces along diagonal lines'
    ],
    specialRules: [
      'Cannot jump over other pieces',
      'Each player starts with one light-squared and one dark-squared bishop',
      'Bishops are especially strong on long, open diagonals'
    ],
    imageSrc: '/images/Tiny_Bishop_White.png',
  },
  knight: {
    name: 'Knight',
    description: 'A tricky piece that moves in an L-shape.',
    movementRules: [
      'Moves in an L-shape: two squares in one direction, then one square perpendicular',
      'Can also be described as: one square in one direction, then two squares perpendicular',
      'Always lands on a square opposite in color from its starting square'
    ],
    captureRules: [
      'Captures the same way it moves',
      'Takes pieces on the landing square only'
    ],
    specialRules: [
      'The ONLY piece that can jump over other pieces',
      'Great for closed positions where other pieces are blocked',
      'Can attack up to 8 different squares from the center of the board'
    ],
    imageSrc: '/images/Tiny_Knight_White.png',
  },
  pawn: {
    name: 'Pawn',
    description: 'The foot soldier — small but full of potential.',
    movementRules: [
      'Moves forward one square',
      'On its first move, can advance two squares forward',
      'Cannot move backward'
    ],
    captureRules: [
      'Captures diagonally forward one square',
      'Does NOT capture the same way it moves'
    ],
    specialRules: [
      'Promotion: When reaching the opposite end, transforms into queen, rook, bishop, or knight',
      'En Passant: Can capture an enemy pawn that just moved two squares forward',
      'Pawns are the only pieces that cannot move backward',
      'Often underestimated but crucial in endgames'
    ],
    imageSrc: '/images/Tiny_Pawn_White.png',
  },
};

// Type definitions
export type PieceId = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";

export interface PieceInfo {
  name: string;
  description: string;
  movementRules: string[];
  captureRules: string[];
  specialRules: string[];
  imageSrc: string;
}

// Pieces array for dropdown rendering
export const PIECES: Array<{ id: PieceId; data: PieceInfo }> = [
  { id: 'king', data: PIECE_DATA.king },
  { id: 'queen', data: PIECE_DATA.queen },
  { id: 'rook', data: PIECE_DATA.rook },
  { id: 'bishop', data: PIECE_DATA.bishop },
  { id: 'knight', data: PIECE_DATA.knight },
  { id: 'pawn', data: PIECE_DATA.pawn },
];
