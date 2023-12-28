
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactHeader from './components/CotactHeader/ContactHeader';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <ContactHeader/>
      <ContactForm/>
    </>
  );
}

export default App;
