import { FC } from "react";
import { Flex } from "@mantine/core";
import { AiFillFileExclamation } from "react-icons/ai";
import { useSelectionStore } from "../../../stores/selectionStore";

import { FILE_ICONS } from "../libs/icons-map";
import { SELECTED_COLOR } from "../../../../../shared/constants/colors";
import { getFileExtension } from "../helpers/getFileExtension";

interface Props {
  name: string;
  itemId: string;
  folderId: string;
}

const File: FC<Props> = ({ name, itemId, folderId }) => {
  const { select, selectedItemId } = useSelectionStore((state) => state);

  const fileIcon = FILE_ICONS[
    getFileExtension(name) as keyof typeof FILE_ICONS
  ] || <AiFillFileExclamation />;

  const isSelected = selectedItemId === itemId;

  return (
    <div
      onClick={() => select(itemId, folderId)}
      style={{
        backgroundColor: isSelected ? SELECTED_COLOR : undefined,
      }}
    >
      <Flex gap="xs" align="center" direction="row">
        {fileIcon}
        {name}
      </Flex>
    </div>
  );
};

export default File;
