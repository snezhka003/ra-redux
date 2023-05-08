import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceFilter from './components/ServiceFilter';
import './App.css';

export default function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
      <hr />
    </>
  );
}