import { type FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAppDispatch } from '../../store/hooks';
import { uploadFile } from '../../store/slices/fileUploadSlice';
import FileIcon from '../icons/FileIcon';
import SmallFileIcon from '../icons/SmallFileIcon';
import ErrorMessage from '../errorText/errorText';
import { FileListContainer, StyledH3, StyledP, StyledTextContainer, StyledWrapping } from './fileUploaderStyles';
import { FileItemComponent } from './FileItemComponent';


interface FileUploaderProps {
  onFileUploaded: (url: string) => void;
}

const FileUploader: FC<FileUploaderProps> = ({ onFileUploaded }) => {
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      if (newFile.size > 10 * 1024 * 1024) {
        setError('Размер файла не должен превышать 10 МБ');
        setFile(null);
        return;
      }
      setError(null);
      setFile(newFile);
      dispatch(uploadFile(newFile))
        .unwrap()
        .then((url) => {
          if (!url) {
            return;
          }
          onFileUploaded(url);
        })
        .catch((error) => console.error('Error uploading file:', error));
    }
  }, [dispatch, onFileUploaded]);

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
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
            Перетащите или&nbsp;
            <span>выберите 1 файл</span>
          </StyledH3>
          <StyledP>Допустимые форматы: doc, pdf до 10 мб</StyledP>
        </StyledTextContainer>
      </StyledWrapping>
      <ErrorMessage errorText={error || ''} />
      {file && (
        <FileListContainer>
          <SmallFileIcon style={{ width: '40px', height: '40px' }} />
          <FileItemComponent key={file.name} file={file} onRemove={removeFile} />
        </FileListContainer>
      )}
    </>
  );
};

export default FileUploader;
