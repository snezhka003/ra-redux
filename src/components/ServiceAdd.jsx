import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

export default function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const { targetId } = useSelector(state => state.serviceEdit);	

	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(addService(item.name, item.price, targetId));
		dispatch(editService(null));
		item.name = '';
		item.price = '';
	}

	const handleCancel = () => {
		item.name = '';
		item.price = '';
		dispatch(changeServiceField(item.name, item.price));
		dispatch(editService(null));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>&#128190;</button>
			{targetId && <button type='reset' onClick={handleCancel}>&#10006;</button>}
		</form>
	);
}