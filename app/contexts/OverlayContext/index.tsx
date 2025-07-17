'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { OverlayContextType } from './types';

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openOverlay = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setTimeout(() => setContent(null), 300); // Limpa conteúdo após animação
  };

  return (
    <OverlayContext.Provider value={{ isOpen, setIsOpen, content, openOverlay, closeOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error('useOverlay must be used within an OverlayProvider');
  }
  return context;
};