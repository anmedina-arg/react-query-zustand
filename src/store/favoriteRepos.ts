import { create } from "zustand";
import { persist } from "zustand/middleware";

type useFavoriteReposStoreProps = {
  favoriteReposId: number[];
  addFavoriteReposId: (id: number) => void;
  removeFavoriteReposId: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<useFavoriteReposStoreProps>(
    (set) => ({
      favoriteReposId: [],
      addFavoriteReposId: (id: number) =>
        set((state) => ({
          favoriteReposId: [...state.favoriteReposId, id],
        })),
      removeFavoriteReposId: (id: number) =>
        set((state) => ({
          favoriteReposId: state.favoriteReposId.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    {
      name: "favoriteRepos",
    }
  )
);
