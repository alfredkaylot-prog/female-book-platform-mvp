"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface FavoritesContextType {
  favorites: number[];
  addToFavorites: (bookId: number) => void;
  removeFromFavorites: (bookId: number) => void;
  isFavorite: (bookId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('user-favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const addToFavorites = (bookId: number) => {
    const newFavorites = [...favorites, bookId];
    setFavorites(newFavorites);
    localStorage.setItem('user-favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (bookId: number) => {
    const newFavorites = favorites.filter(id => id !== bookId);
    setFavorites(newFavorites);
    localStorage.setItem('user-favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (bookId: number) => {
    return favorites.includes(bookId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}