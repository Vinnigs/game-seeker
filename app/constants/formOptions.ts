import { SelectValuesType } from "../components/forms/SelectComponent/types"
import { GenreEnum } from "../enums/GenreEnum"
import { PlataformEnum } from "../enums/PlataformEnum"

export const genderOptions: SelectValuesType[] = [
    { label: "MMORPG", value: GenreEnum.MMORPG },
    { label: "Tiro", value: GenreEnum.Shooter },
    { label: "MOBA", value: GenreEnum.MOBA },
    { label: "Anime", value: GenreEnum.Anime },
    { label: "Battle Royale", value: GenreEnum.BattleRoyale },
    { label: "Estratégia", value: GenreEnum.Strategy },
    { label: "Fantasia", value: GenreEnum.Fantasy },
    { label: "Sci-Fi", value: GenreEnum.SciFi },
    { label: "Carta", value: GenreEnum.CardGames },
    { label: "Corrida", value: GenreEnum.Racing },
    { label: "Luta", value: GenreEnum.Fighting },
    { label: "Social", value: GenreEnum.Social },
    { label: "Esportes", value: GenreEnum.Sports }
]

export const plataformOptions: SelectValuesType[] = [
    { label: "PC", value: PlataformEnum.PC },
    { label: "Navegador", value: PlataformEnum.WebBrowser }
]