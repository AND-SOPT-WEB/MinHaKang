import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <Backdrop onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Content>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;

const Backdrop = styled.section`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  display: flex;

  width: 40rem;
  height: 20rem;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  background: white;
  border-radius: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
