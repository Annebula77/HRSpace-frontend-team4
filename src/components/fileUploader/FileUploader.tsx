import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import FileIcon from '../icons/FileIcon';

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
`;

const FileItem = styled.div`
  background-color: #E1E3E4; // Пример фона миниатюры файла
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #FF0000; // Пример цвета крестика
`;

const FileItemComponent: React.FC<{ file: File; onRemove: () => void }> = ({ file, onRemove }) => (
  <FileItem>
    <span>{file.name}</span>
    <RemoveButton onClick={onRemove}>X</RemoveButton>
  </FileItem>
);

const FileUploader: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (fileToRemove: File) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/msword': ['.doc', '.docx'],
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt', '.rtf'],
    },
  });

  return (
    <>
      <StyledWrapping {...getRootProps()}>
        <input {...getInputProps()} />
        <FileIcon />
        <StyledTextContainer>
          <StyledH3>
            Перетащите или
            <span>выберите 1 файл</span>
          </StyledH3>
          <StyledP>Допустимые форматы: doc, pdf до 10 мб</StyledP>
        </StyledTextContainer>
      </StyledWrapping>
      {files.length > 0 && (
        <FileListContainer>
          {files.map((file) => (
            <FileItemComponent key={file.name} file={file} onRemove={() => removeFile(file)} />
          ))}
        </FileListContainer>
      )}
    </>
  );
};

export default FileUploader;
