import type { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import {
  VscNewFile,
  VscNewFolder,
  VscCollapseAll,
  VscExpandAll,
} from "react-icons/vsc";
import { ICON_SIZE } from "../../../../../shared/constants/sizes";

interface Props {
  handleNewFile: () => void;
  handleNewFolder: () => void;
  collapseAll: () => void;
  expandAll: () => void;
  disableNewFile: boolean;
  disableNewFolder: boolean;
}

const ControlIcons: FC<Props> = ({
  handleNewFile,
  handleNewFolder,
  collapseAll,
  expandAll,
  disableNewFile,
  disableNewFolder,
}) => {
  return (
    <>
      <Tooltip label="Add file">
        <ActionIcon onClick={handleNewFile} disabled={disableNewFile}>
          <VscNewFile size={ICON_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Add folder">
        <ActionIcon onClick={handleNewFolder} disabled={disableNewFolder}>
          <VscNewFolder size={ICON_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Collapse all">
        <ActionIcon onClick={collapseAll}>
          <VscCollapseAll size={ICON_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Expand all">
        <ActionIcon onClick={expandAll}>
          <VscExpandAll size={ICON_SIZE} />
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default ControlIcons;
