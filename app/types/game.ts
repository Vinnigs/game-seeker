import { GenreEnum } from "../enums/GenreEnum";
import { PlataformEnum } from "../enums/PlataformEnum";

export default interface Game {
    id: string;
    title: string;
    plataform: PlataformEnum;
    ram: number;
    genre: GenreEnum;
}