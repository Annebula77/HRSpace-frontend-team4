import styled from 'styled-components';

export const StyledWrapping = styled.div`
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

export const StyledH3 = styled.h3`
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

export const StyledTextContainer = styled.div`
  width: 100%;
  margin: 0;
  padding:0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;

`;

export const StyledP = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(149, 151, 153, 1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const FileListContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const FileItem = styled.div`
  background-color: #E1E3E4; 
  border-radius: 4px;
  padding: 8px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(73, 75, 77, 1); 
`;