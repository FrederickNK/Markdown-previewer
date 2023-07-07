import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';




const OutputContainer = styled.div`
  width: 50%;
  height: 200px;
`;



const MarkdownOutput = ({markdown}:any ) => {
    
    return (
      <OutputContainer>
          <ReactMarkdown>{markdown}</ReactMarkdown>
      </OutputContainer>
    );
};

export default MarkdownOutput;


