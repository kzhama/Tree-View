import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { Collapse, Flex } from "@mantine/core";
import { useSelectionStore } from "../../../stores/selectionStore";
import { FOLDER_ICONS } from "../libs/icons-map";
import { ITEM_SELECTION_COLOR } from "../../../../../shared/constants/colors";
import { useFoldersStore } from "../../../stores/foldersStore";

interface Props extends PropsWithChildren {
  name: string;
  folderId: string;
}

const Folder: FC<Props> = ({ name, folderId, children }) => {
  const { select, selectedItemId } = useSelectionStore((state) => state);

  const { toggle, expandedFolders, trackFolder } = useFoldersStore(
    (state) => state
  );

  const handleOnClick = () => {
    toggle(folderId);
    select(folderId, folderId);
  };

  useEffect(() => {
    trackFolder(folderId);
  }, [trackFolder, folderId]);

  const isSelected = selectedItemId === folderId;

  const isExpanded = expandedFolders.includes(folderId);

  const folderIcon = FOLDER_ICONS[isExpanded ? "opened" : "closed"];

  return (
    <div>
      <div
        onClick={handleOnClick}
        style={{
          cursor: "pointer",
          backgroundColor: isSelected ? ITEM_SELECTION_COLOR : undefined,
        }}
      >
        <Flex gap="xs" align="center" direction="row">
          {folderIcon}
          {name}
        </Flex>
      </div>
      <div
        style={{
          marginLeft: "5px",
          paddingLeft: "15px",
          borderLeft: "1px solid grey",
        }}
      >
        <Collapse in={isExpanded}>
          <div>{children}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default Folder;
