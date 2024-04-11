import { type FC } from "react";
import { FileItem, RemoveButton } from "./fileUploaderStyles";

export const FileItemComponent: FC<{ file: File; onRemove: () => void }> = ({ file, onRemove }) => (
  <FileItem>
    <span>{file.name}</span>
    <RemoveButton onClick={onRemove}>X</RemoveButton>
  </FileItem>
);
