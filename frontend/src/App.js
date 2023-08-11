import Main from './pages';
import { AppWrapper } from "./context/AppContext";
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Main />
    </AppWrapper>
  );
}

export default App;
