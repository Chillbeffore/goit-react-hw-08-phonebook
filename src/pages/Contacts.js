import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactsList from '../components/Contacts/ContactsList';
import Form from 'components/Form/Form';
import Filter from '../components/Filter/Filter'

import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Form />
      <h2>Contacts</h2>
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      <ContactsList />
    </>
  );
}
