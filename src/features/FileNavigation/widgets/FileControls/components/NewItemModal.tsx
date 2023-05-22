import type { FC } from "react";
import { Modal, TextInput, useMantineTheme } from "@mantine/core";
import { Item } from "..";

interface Props {
  newItemKind: Item | null;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  textInput: string;
  setTextInput: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const NewItemModal: FC<Props> = ({
  newItemKind,
  isModalOpen,
  setIsModalOpen,
  textInput,
  setTextInput,
  handleKeyDown,
}) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={`Create new ${newItemKind}`}
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <TextInput
        data-autofocus
        placeholder={`Name your ${newItemKind}`}
        mt="md"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Modal>
  );
};

export default NewItemModal;
