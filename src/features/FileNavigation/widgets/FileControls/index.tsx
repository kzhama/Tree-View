import { useState } from "react";
import { v4 } from "uuid";
import { Flex } from "@mantine/core";

import { useSelectionStore } from "../../stores/selectionStore";
import { useProjectFileStructureStore } from "../../stores/projectFileStructureStore";
import NewItemModal from "./components/NewItemModal";
import ControlIcons from "./components/ControlIcons";
import { useFoldersStore } from "../../stores/foldersStore";

export enum Item {
  FILE = "file",
  FOLDER = "folder",
}

const FileControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItemKind, setNewItemKind] = useState<null | Item>(null);
  const [textInput, setTextInput] = useState("");

  const { collapseAll, expandAll } = useFoldersStore((state) => state);
  const { selectedItemFolderId, removeSelection } = useSelectionStore(
    (state) => state
  );
  const { addFile, addFolder } = useProjectFileStructureStore((state) => state);

  const handleNewFile = () => {
    setNewItemKind(Item.FILE);
    setIsModalOpen(true);
  };

  const handleNewFolder = () => {
    setNewItemKind(Item.FOLDER);
    setIsModalOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (newItemKind === Item.FILE) {
        addFile(
          {
            id: v4(),
            name: textInput,
            kind: "file",
          },
          selectedItemFolderId
        );
      }

      if (newItemKind === Item.FOLDER) {
        addFolder(
          {
            id: v4(),
            name: textInput,
            kind: "directory",
            children: [],
          },
          selectedItemFolderId
        );
      }

      setIsModalOpen(false);
      setTextInput("");
      setNewItemKind(null);
    }
  };

  const handleCollapseAll = () => {
    collapseAll();
    removeSelection();
  };

  return (
    <Flex gap="xs" align="center" direction="row">
      <NewItemModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleKeyDown={handleKeyDown}
        newItemKind={newItemKind}
        setTextInput={setTextInput}
        textInput={textInput}
      />
      <ControlIcons
        handleNewFile={handleNewFile}
        handleNewFolder={handleNewFolder}
        collapseAll={handleCollapseAll}
        expandAll={expandAll}
        disableNewFile={!selectedItemFolderId}
        disableNewFolder={!selectedItemFolderId}
      />
    </Flex>
  );
};

export default FileControls;
