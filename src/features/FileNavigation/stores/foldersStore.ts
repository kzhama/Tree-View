import { create } from "zustand";

interface FoldersState {
  folders: string[];
  expandedFolders: string[];
  toggle: (id: string) => void;
  collapseAll: () => void;
  expandAll: () => void;
  trackFolder: (id: string) => void;
}

export const useFoldersStore = create<FoldersState>((set) => ({
  folders: [],
  expandedFolders: [],
  trackFolder: (id: string) =>
    set((state) => {
      if (state.folders.includes(id)) {
        return {};
      }
      return { folders: [...state.folders, id] };
    }),
  toggle: (id: string) =>
    set((state) => {
      if (state.expandedFolders.includes(id)) {
        return {
          expandedFolders: [
            ...state.expandedFolders.filter((folderId) => folderId !== id),
          ],
        };
      }
      return { expandedFolders: [...state.expandedFolders, id] };
    }),
  collapseAll: () => set({ expandedFolders: [] }),
  expandAll: () => set((state) => ({ expandedFolders: [...state.folders] })),
}));
