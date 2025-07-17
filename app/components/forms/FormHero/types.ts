import { formDataType } from "@/app/sections/Hero/types"
import { Dispatch, SetStateAction } from "react"

export type formHeroProps = {
    formData: formDataType
    setFormData: Dispatch<SetStateAction<formDataType>>
    handleSearch: () => Promise<void>;
}