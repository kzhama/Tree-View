import type { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";
import {
  VscNewFile,
  VscNewFolder,
  VscCollapseAll,
  VscExpandAll,
} from "react-icons/vsc";
import { ICONS_SIZE } from "../../../../../shared/constants/sizes";

interface Props {
  handleNewFile: () => void;
  handleNewFolder: () => void;
  collapseAll: () => void;
  expandAll: () => void;
}

const ControlIcons: FC<Props> = ({
  handleNewFile,
  handleNewFolder,
  collapseAll,
  expandAll,
}) => {
  return (
    <>
      <Tooltip label="Add file">
        <ActionIcon onClick={handleNewFile}>
          <VscNewFile size={ICONS_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Add folder">
        <ActionIcon onClick={handleNewFolder}>
          <VscNewFolder size={ICONS_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Collapse all">
        <ActionIcon onClick={collapseAll}>
          <VscCollapseAll size={ICONS_SIZE} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Expand all">
        <ActionIcon onClick={expandAll}>
          <VscExpandAll size={ICONS_SIZE} />
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default ControlIcons;
