// Tipo básico para listagem de jogos
export type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export type GameDetails = Game & {
    status: string;
    description: string;
    minimum_system_requirements?: GameMinimumSystemRequirements;
    screenshots: GameScreenshots[];
    tags?: string[];
}

export type GameMinimumSystemRequirements = {
    os?: string;
    processor?: string;
    memory?: string;
    graphics?: string;
    storage?: string;
}

export type GameScreenshots = {
    id: number;
    image: string
}