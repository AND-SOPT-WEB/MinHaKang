import React from 'react';
import styled from '@emotion/styled';

const Game = ({
  numbers,
  nextNumber,
  hiddenButtons,
  handleBoardClick,
  gridSize,
}) => {
  return (
    <GameContainer>
      <h2>다음 숫자: {nextNumber}</h2>

      <ButtonGrid gridSize={gridSize}>
        {numbers.map((number, index) =>
          hiddenButtons.includes(index) ? (
            <HiddenDiv key={index} />
          ) : (
            <NumberButton
              key={index}
              onClick={() => handleBoardClick(number, index)}
            >
              {number}
            </NumberButton>
          )
        )}
      </ButtonGrid>
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  align-items: center;
  height: 50vh;
  gap: 3rem;

  & h2 {
    font-size: 2.4rem;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridSize}, 10rem);
  gap: 1rem;
`;

const NumberButton = styled.button`
  width: 10rem;
  height: 10rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const HiddenDiv = styled.div`
  width: 10rem;
  height: 10rem;
`;
