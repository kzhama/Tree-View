import type { FC } from "react";
import File from "./components/File";
import Folder from "./components/Folder";
import type { FileNode } from "../../../../../data";

interface Props {
  data: FileNode[];
  folderId?: string;
}

const FileTree: FC<Props> = ({ data, folderId = "" }) => {
  return (
    <div>
      {data.map((item) => {
        if (item.kind === "file") {
          return (
            <File
              key={item.id}
              name={item.name}
              itemId={item.id as string}
              folderId={folderId}
            />
          );
        }
        if (item.kind === "directory") {
          return (
            <Folder name={item.name} folderId={item.id as string} key={item.id}>
              <FileTree data={item.children as FileNode[]} folderId={item.id} />
            </Folder>
          );
        }
      })}
    </div>
  );
};

export default FileTree;
