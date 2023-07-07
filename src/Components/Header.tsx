import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: space-between;
    padding: 1.5em;
    align-items: center;
    background-color: black;
}
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  margin: 0;

`;

const Button = styled.button`
  background-color: Gray;
  &:hover {
    background-color: white;
  }
  margin-top : 0.5em;

`;

interface HeaderProps {
  onToggleGuide: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <button onClick={onToggleGuide}>User Guide</button>
    </HeaderContainer>
  );
};

export default Header;
