import { useState } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { ButtonWithIcon } from '../components/ButtonWithIcon/ButtonWithIcon';
import { Modal } from '../components/Modal/Modal';
import { HiPlusCircle } from 'react-icons/hi';
import { Message } from '../components/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import styled from 'styled-components';

const Subtitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin-top: 80px;
    margin-bottom: 20px;
`



export const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const arrContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const togleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      {arrContacts.length === 0 && !isLoading && (
        <Message text="You don't have contacts yet" />
      )}
      <ButtonWithIcon onClick={togleModal} aria-label="add phone">
        <HiPlusCircle size={20} />
        ADD PHONE
      </ButtonWithIcon>
      {showModal && (
        <Modal onClose={togleModal}>
          <ContactForm onClose={togleModal} />
        </Modal>
      )}
      {isLoading && !error && <p>Loading...</p>}
      {arrContacts.length !== 0 && (
        <>
          <Subtitle>Contacts</Subtitle>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};
