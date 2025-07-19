import { FormDataProps } from "@/sections/Hero/types"
import { GameDetails } from "@/types/GameDetails"
import { Dispatch, SetStateAction } from "react"

export type FormHeroProps = {
    formData: FormDataProps
    setFormData: Dispatch<SetStateAction<FormDataProps>>
    handleSearch: (e: React.FormEvent | React.MouseEvent) => Promise<boolean>;
    games: GameDetails[];
    hasError?: boolean;
}