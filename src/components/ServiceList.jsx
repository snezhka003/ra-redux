import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, changeServiceField} from '../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();
  const valid = /[\wа-яА-Я]/;
  let itemsForRender = [];

  if (filter.filter !== '' && filter.filter.search(valid) !== -1) {
    itemsForRender = items.filter((o) => o.name.toLowerCase().indexOf(filter.filter.toLowerCase()) !== -1)
  } else {
    itemsForRender = items;
  }

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(editService(null));
  }

  const handleEdit = (o) => {
    const { id, name, price } = o;
    dispatch(changeServiceField('name', String(name)));
    dispatch(changeServiceField('price', String(price)));
    dispatch(editService(id));
  }

  return (
    <ul>
      {itemsForRender.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>&#128465;</button>
        </li>
      ))}
    </ul>
  )
}