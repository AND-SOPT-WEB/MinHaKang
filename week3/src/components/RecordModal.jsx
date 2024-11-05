import Modal from '@common/Modal';
import styled from '@emotion/styled';

const RecordModal = ({ isOpen, onClose, record }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer>
        <h2>게임 끝!</h2>
        {record ? (
          <>
            <p>🎉 기록: {record.playTime}초 🎉 </p>
          </>
        ) : (
          <p>기록이 없습니다.</p>
        )}
      </ModalContainer>
    </Modal>
  );
};

export default RecordModal;

// 스타일 정의
const ModalContainer = styled.div`
  text-align: center;

  & h2 {
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  & p {
    font-size: 2.4rem;
  }
`;
