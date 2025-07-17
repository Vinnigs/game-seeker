import { GenreEnum } from "@/app/enums/GenreEnum";
import { PlataformEnum } from "@/app/enums/PlataformEnum";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export type SelectValuesType = {
    label: string;
    value: PlataformEnum | GenreEnum;
}

export type SelectComponentProps = {
  id: string;
  label: string;
  valuesLabel: SelectValuesType[];
};

