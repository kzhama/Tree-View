import { Card, Space } from "@mantine/core";
import { useProjectFileStructureStore } from "./stores/projectFileStructureStore";
import FileControls from "./widgets/FileControls";
import FileTree from "./widgets/FileTree";

import "./FileNavigation.css";

const FileNavigation = () => {
  const { filesStructure } = useProjectFileStructureStore((state) => state);

  return (
    <div className="file-navigation-container">
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ height: "100%" }}
      >
        <FileControls />
        <Space h="md" />
        <FileTree data={filesStructure} />
      </Card>
    </div>
  );
};

export default FileNavigation;
