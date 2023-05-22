import { create } from "zustand";
import { v4 } from "uuid";
import { FileNode } from "../../../../data";

interface ProjectFileStructureState {
  filesStructure: FileNode[];
  setFilesStructure: (fileStructure: FileNode[]) => void;
  clearFilesStructure: () => void;
  addFile: (file: FileNode, folderId: string) => void;
  addFolder: (folder: FileNode, folderId: string) => void;
}

export const useProjectFileStructureStore = create<ProjectFileStructureState>(
  (set) => ({
    filesStructure: [],
    setFilesStructure: (data: FileNode[]) => {
      const dataWithIds = addIDsToFileStructure(data);
      return set({ filesStructure: dataWithIds });
    },
    clearFilesStructure: () => set({ filesStructure: [] }),
    addFile: (file: FileNode, id: string) =>
      set((state) => {
        const newFilesStructure = findObjectByIdAndAppendNewItem(
          state.filesStructure,
          id,
          file
        );
        return { filesStructure: newFilesStructure };
      }),
    addFolder: (file: FileNode, id: string) =>
      set((state) => {
        const newFilesStructure = findObjectByIdAndAppendNewItem(
          state.filesStructure,
          id,
          file
        );
        return { filesStructure: newFilesStructure };
      }),
  })
);

// ----------------------------------------------------------------
// helper functions
// ----------------------------------------------------------------

function findObjectByIdAndAppendNewItem(
  data: FileNode[],
  folderId: string,
  newItem: FileNode
): FileNode[] {
  function traverse(d: FileNode[]) {
    for (let i = 0; i < d.length; i++) {
      const obj = d[i];
      if (obj.id === folderId) {
        if (!obj.children) {
          obj.children = [];
        }
        obj.children.push(newItem);
        return true;
      }

      if (obj.children && obj.children.length > 0) {
        if (traverse(obj.children)) {
          return true;
        }
      }
    }

    return false;
  }

  const dataCopy: FileNode[] = JSON.parse(JSON.stringify(data));
  traverse(dataCopy);

  return dataCopy;
}

const addIDsToFileStructure = (data: FileNode[]) => {
  function traverse(node: FileNode) {
    node.id = v4();

    if (node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    traverse(data[i]);
  }

  return data;
};
