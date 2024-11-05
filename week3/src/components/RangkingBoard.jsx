import styled from '@emotion/styled';
import { useState } from 'react';
import { getRecords, sortRecords, resetRecords } from '@utils/recordStorage.js';

const RangkingBoard = () => {
  const [records, setRecords] = useState(getRecords());
  const sortedRecords = sortRecords(records);

  const handleReset = () => {
    resetRecords();
    setRecords([]);
  };

  return (
    <RankContainer>
      <RankHeader>
        <h2>랭킹</h2>
        <button onClick={handleReset}>초기화</button>
      </RankHeader>

      <Table>
        <thead>
          <tr>
            <th>타임스탬프</th>
            <th>레벨</th>
            <th>플레이 시간</th>
          </tr>
        </thead>

        <tbody>
          {sortedRecords.map((record, index) => (
            <tr key={index}>
              <td>{new Date(record.endTime).toLocaleString()}</td>
              <td>Level {record.level}</td>
              <td>{record.playTime} 초</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </RankContainer>
  );
};

export default RangkingBoard;

const RankContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 5rem 30rem;
  padding: 5rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.blue03};
`;

const RankHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 5rem;

  & button {
    position: absolute;
    top: 4rem;
    right: 5rem;
    padding: 1.3rem 2rem;

    border: none;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.blue02};

    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

const Table = styled.table`
  width: 100%;
  margin: 4rem 0;
  border-collapse: collapse;

  & th {
    padding: 1.5rem;
    border: 2px solid #686d76;
    background-color: ${({ theme }) => theme.colors.blue02};
    font-size: 1.6rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.white};
  }

  & tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.white};
  }

  & tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.blue03};
  }

  & td {
    padding: 1.5rem;
    border: 2px solid ${({ theme }) => theme.colors.blue02};
    font-size: 1.6rem;
  }
`;
