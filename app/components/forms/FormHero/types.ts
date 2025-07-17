import { formDataType } from "@/app/sections/Hero/types"
import { GameDetails } from "@/app/types/GameDetails"
import { Dispatch, SetStateAction } from "react"

export type formHeroProps = {
    formData: formDataType
    setFormData: Dispatch<SetStateAction<formDataType>>
    handleSearch: () => Promise<void>;
    games: GameDetails[];
}