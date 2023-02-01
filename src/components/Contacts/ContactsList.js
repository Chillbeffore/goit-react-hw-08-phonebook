import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from 'components/Contacts/ContactsList.module.css';
import { MdClose } from 'react-icons/md';
import { fetchContacts } from '../../redux/contacts/operations';
import { deleteContact } from '../../redux/contacts/operations';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilterValue,
} from '../../redux/contacts/selector';

const ContactsList = () => {
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {items.length > 0 &&
          items
            .filter(item => item.name.toLowerCase().includes(filterValue))
            .map(item => {
              const { id, name, number } = item;
              return (
                <li className={css.item} key={id} id={id}>
                  <div className={css.itemContent}>
                    {name}: {number}
                  </div>

                  <button
                    className={css.buttonDelete}
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <MdClose />
                  </button>
                </li>
              );
            })}
      </ul>
    </>
  );
};

export default ContactsList;
