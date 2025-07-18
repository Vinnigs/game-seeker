export type cardGameProps = {
    gameId: number;
    title: string;
    genre: string;
    date: string;
    platform: string;
    image: string;
    position?: "horizontal" | "vertical";
}