import { useDispatch } from 'react-redux';
import css from 'components/Filter/filtr.module.css';
import { addFilter } from '../../redux/contacts/sliseFilter';

const Filter = () => {
  const dispatch = useDispatch();

  const onFiltrChange = e => {
    return dispatch(addFilter(e.target.value.toLowerCase()));
  };

  return (
    <label>
      <span className={css.findSpam}>Find contacts by name</span>
      <input
        className={css.findInput}
        type="text"
        name="filter"
        onChange={onFiltrChange}
      />
    </label>
  );
};

export default Filter;
