import { create } from "zustand";

interface SelectionState {
  selectedItemId: string;
  selectedItemFolderId: string;
  select: (itemId: string, folderId: string) => void;
  removeSelection: () => void;
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedItemId: "",
  selectedItemFolderId: "",
  select: (itemId: string, folderId: string) =>
    set(() => ({ selectedItemId: itemId, selectedItemFolderId: folderId })),
  removeSelection: () => set({ selectedItemId: "", selectedItemFolderId: "" }),
}));
