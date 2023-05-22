import { useEffect } from "react";
import { useProjectFileStructureStore } from "./features/FileNavigation/stores/projectFileStructureStore.js";
import { FileNavigation } from "./features/FileNavigation";
import { data } from "../data.js";

import "./App.css";

function App() {
  const { setFilesStructure } = useProjectFileStructureStore((state) => state);

  useEffect(() => {
    setFilesStructure(data);
  }, [setFilesStructure]);

  return (
    <div className="App">
      <FileNavigation />
    </div>
  );
}

export default App;
