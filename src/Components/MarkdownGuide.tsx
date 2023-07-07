import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
background-color: #f9f9f9;
  padding: 20px;
`;

const Title = styled.h2`
margin: 0;
`;


const MarkdownGuide = ()=> {
    return (
      <GuideContainer>
        <Title>Markdown Guide</Title>
        <ul>
          <li>
            <code># Heading</code> - Creates a heading element. Example:{" "}
            <code># My Heading</code>
          </li>
          <li>
            <code>**Bold**</code> - Renders the text in bold. Example:{" "}
            <code>**Hello**</code>
          </li>
          <li>
            <code>*Italic*</code> - Renders the text in italic. Example:{" "}
            <code>*Hello*</code>
          </li>
        </ul>
      </GuideContainer>
    );
};

export default MarkdownGuide;