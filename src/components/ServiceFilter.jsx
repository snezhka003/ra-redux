import {useSelector, useDispatch} from 'react-redux';
import {filterService} from '../actions/actionCreators';

export default function ServiceFilter() {
	const { filter } = useSelector(state => state.serviceFilter);

	const dispatch = useDispatch();

	const handleChange = evt => {
		const {value} = evt.target;
        dispatch(filterService(value));
	}

	return (
        <div className="filter-container">
			<span>Filter</span> 
			<input className="filter" onChange={handleChange} value={filter} />
        </div>

	);
}