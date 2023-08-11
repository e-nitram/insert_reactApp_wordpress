import React from "react";

const initialState = {
  booking_number: '',
  day: '',
  time: '',
  name: '',
  surname: '',
  email: '',
  phone: '',
  remark: '',
  state: '/open',
  flag: 1,
  latestState: null
};

const AppContext = React.createContext(initialState);

export function AppWrapper({ children }) {
  const [state, setState] = React.useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext(AppContext);
}
