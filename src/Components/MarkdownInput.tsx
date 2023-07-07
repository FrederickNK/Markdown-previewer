import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 14px;
  border: 3px solid #ccc;
  border-radius: 4px;
`;


interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;