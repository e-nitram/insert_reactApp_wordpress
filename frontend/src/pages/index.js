import SelectContainer from '../containers/SelectContainer'
import ContactContainer from '../containers/ContactContainer'
import { useAppContext } from '../context/AppContext';
import Open from '../pages/open'
import SelectNumber from '../pages/selectInfo/selectNumber'
import SelectDay from '../pages/selectInfo/selectDay'
import SelectTime from '../pages/selectInfo/selectTime'
import SelectConfirm from '../pages/selectCheckout/selectConfirm'
import SelectReservation from '../pages/selectCheckout/selectReservation'
import SelectSummary from '../pages/selectCheckout/selectSummary'

function App() {

  const [context] = useAppContext();

  return (
    <>
    {context.state === '/open' && <Open />}
    {context.state === '/select' && <SelectContainer />}
    {context.state === '/select_day' && <SelectDay />}
    {context.state === '/select_time' && <SelectTime />}
    {context.state === '/select_number' && <SelectNumber />}
    

    {context.state === '/contact' && <ContactContainer />}
    {context.state === '/contact_confirm' && <SelectConfirm />}
    {context.state === "/contact_reservation" && <SelectReservation />}
    {context.state === '/contact_summary' && <SelectSummary />}
    </>
  );
}

export default App;
