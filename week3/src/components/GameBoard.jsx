import styled from '@emotion/styled';

const GameBoard = ({
  numbers,
  nextNumber,
  hiddenButtons,
  handleBoardClick,
  gridSize,
  flashButtons,
  clickedButtons,
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
              isClicked={clickedButtons.includes(index)}
              isFlashing={flashButtons.includes(index)}
            >
              {number}
            </NumberButton>
          )
        )}
      </ButtonGrid>
    </GameContainer>
  );
};

export default GameBoard;

const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  height: 50vh;
  align-items: center;
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
  border: none;
  background-color: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.blue01 : theme.colors.blue02};
  position: relative;
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue01};
  }
  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
  ${({ isFlashing }) => isFlashing && `animation: flash 0.4s ease forwards;`}
`;

const HiddenDiv = styled.div`
  width: 10rem;
  height: 10rem;
`;
