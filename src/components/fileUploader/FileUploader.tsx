import React, { type FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useAppDispatch } from "../../store/hooks";
import { uploadFile } from "../../store/slices/fileUploadSlice";
import FileIcon from "../icons/FileIcon";
import SmallFileIcon from "../icons/SmallFileIcon";
import ErrorMessage from "../errorText/errorText";

const StyledWrapping = styled.div`
  width: 100%;
  margin: 0;
  padding: 19px 16px 19px;
  box-sizing: border-box;
  border: 1px dotted rgba(186, 189, 191, 1);
  border-radius: 8px;
  background-color: rgba(250, 250, 250, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const StyledH3 = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(48, 50, 51, 1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;

    & span {
      color: rgba(23, 133, 229, 1);
    }
`;

const StyledTextContainer = styled.div`
  width: 100%;
  margin: 0;
  padding:0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;

`;

const StyledP = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(149, 151, 153, 1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const FileListContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const FileItem = styled.div`
  background-color: #E1E3E4; 
  border-radius: 4px;
  padding: 8px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(73, 75, 77, 1); 
`;

const FileItemComponent: React.FC<{ file: File; onRemove: () => void }> = ({ file, onRemove }) => (
  <FileItem>
    <span>{file.name}</span>
    <RemoveButton onClick={onRemove}>X</RemoveButton>
  </FileItem>
);

interface FileUploaderProps {
  onFileUploaded: (url: string) => void;
}

const FileUploader: FC<FileUploaderProps> = ({ onFileUploaded }) => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("Размер файла не должен превышать 10 МБ");
        setFile(null);
        return;
      }
      setError(null);
      setFile(file);
      dispatch(uploadFile(file))
        .unwrap()
        .then((url) => onFileUploaded(url))
        .catch((error) => console.error("Error uploading file:", error));
    }
  }, [dispatch, onFileUploaded]);

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/msword": [".doc", ".docx"],
      "application/pdf": [".pdf"],
      "text/plain": [".txt", ".rtf"],
    },
  });

  return (
    <>
      <StyledWrapping {...getRootProps()}>
        <input {...getInputProps()} />
        <FileIcon />
        <StyledTextContainer>
          <StyledH3>
            Перетащите или&nbsp;
            <span>выберите 1 файл</span>
          </StyledH3>
          <StyledP>Допустимые форматы: doc, pdf до 10 мб</StyledP>
        </StyledTextContainer>
      </StyledWrapping>
      <ErrorMessage errorText={error || ""} />
      {file && (
        <FileListContainer>
          <SmallFileIcon style={{ width: "40px", height: "40px" }} />
          <FileItemComponent key={file.name} file={file} onRemove={removeFile} />
        </FileListContainer>
      )}
    </>
  );
};

export default FileUploader;
