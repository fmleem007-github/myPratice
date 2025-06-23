import logo from './logo.svg';
import './App.css';
import { Member } from './components/member/member';
import { Reservation } from './components/reservation/reservation';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { MAIN_VIEWS } from './components/const';

function App() {
  // Hooks
  const [service, setService] = useState(MAIN_VIEWS.MEMBER_VIEW);

  useEffect(() => {
    console.log('Current service:', service);
  }, [service]);

  // Render
  return (
    <div className="App">
      <Header setService={setService} />
     <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="자연 경관"
        style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
      />

      {service === MAIN_VIEWS.MEMBER_VIEW && (
        <Member setService={setService} />
      )}

      {service === MAIN_VIEWS.RESERV_VIEW && (
        <Reservation setService={setService} />
      )}
    </div>
  );
}

export default App;
