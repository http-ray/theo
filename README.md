# Theo ♟️ — Chess AI Teacher (Stockfish + LLM Coach)

Theo is a chess “AI teacher” that plays you at different Elo levels and teaches you along the way.  
It uses **Stockfish** for strong, explainable analysis and an **LLM** to turn engine outputs into **human-friendly coaching** (live hints + post-game key moments).

---

## What Theo Does

- **Plays vs you** at selectable difficulty (Elo buckets like 400 / 800 / 1200 / 1600 / 2000)
- **Live coaching (during game)**: quick, actionable hints based on engine analysis
- **Post-game review**: 3–8 key moments, blunders/misses, what to do next time
- **Color choice**: play as **White or Black**
- **Clean API contract** so the engine/orchestration and coaching/UI can be developed independently

---

## Tech Stack

**Backend (Person A)**
- FastAPI + Python
- `python-chess` for rules/FEN/PGN
- Stockfish (UCI) for move selection + evaluation
- SQLite for persistence (simple hackathon-ready)

**Coaching Layer (Person B)**
- LLM client + prompt templates
- Consumes engine payload from backend and returns coaching JSON

**Frontend**
- React (Vite) chessboard UI (planned / WIP)

---

## Repo Layout

```text
theo/
├─ backend/                # FastAPI + Stockfish + DB
│  ├─ theo_api/
│  │  ├─ api/              # HTTP endpoints
│  │  ├─ services/
│  │  │  ├─ stockfish/     # UCI engine wrapper + difficulty mapping
│  │  │  └─ storage/       # DB models + repo helpers
│  │  └─ schemas/          # Pydantic request/response models
├─ frontend/               # React UI (Vite)
├─ docs/
│  ├─ api.md               # Contract between engine + coaching/front-end
│  └─ architecture.md      # High-level design
└─ engine/                 # Stockfish configs + sample positions
