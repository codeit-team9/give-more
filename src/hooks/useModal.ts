import { useState } from 'react';

function useModal(initialValue = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, toggleModal, openModal, closeModal };
}

export default useModal;
