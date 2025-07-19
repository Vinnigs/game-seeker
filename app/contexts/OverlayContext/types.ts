import { Dispatch, ReactNode, SetStateAction } from "react";

export type OverlayContextProps = {
  isOpen: boolean;
  content: ReactNode;
  openOverlay: (content: ReactNode) => void;
  closeOverlay: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>
};