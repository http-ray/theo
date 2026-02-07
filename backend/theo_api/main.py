from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from theo_api.api.health import router as health_router
from theo_api.api.games import router as games_router
from theo_api.services.storage.db import Base, engine
from theo_api.config import settings

def create_app() -> FastAPI:
    app = FastAPI(title="Theo Backend", version="0.1.0")
    Base.metadata.create_all(bind=engine)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list(),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(health_router, prefix=settings.api_prefix)
    app.include_router(games_router, prefix=settings.api_prefix)

    return app

app = create_app()
