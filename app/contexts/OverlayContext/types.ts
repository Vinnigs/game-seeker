import { Dispatch, ReactNode, SetStateAction } from "react";

export type OverlayContextType = {
  isOpen: boolean;
  content: ReactNode;
  openOverlay: (content: ReactNode) => void;
  closeOverlay: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>
};