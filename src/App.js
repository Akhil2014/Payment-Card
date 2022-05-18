
import './App.css';
import Arrow from './components/arrow';
import Button from './components/Button';
import Company from './components/company';
import Date from './components/date';
import Logo from './components/logo';

function App() {
  return (
    <>
    <div className="App">
      <div className='flex'>
      <Date data="21/08/2002"/>
    <Logo  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKLdz1AOZHAYRbHKquysD8uI_ftqvRwFHtw&usqp=CAU" /> 
      </div>
      <Button />
      <Company name="Amazon Gift"/>
      <Company name="Pay"/>
      <div className="flex">
      <Date data="Dekstop-Mobile"/>
      <Logo  src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-arrow-24.png" /> 
      </div>
    </div>
    </>
    
  );
}

export default App;
