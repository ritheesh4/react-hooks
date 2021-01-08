import './App.css';
import DataFetching from './components/DataFetching';
import React from 'react'
// import IntervalHookCounter from './components/IntervalHookCounter';
// import Button from './components/HookCounter'
// import HookCounterTwo from './components/HookCounterTwo'
// import ThemedButton from './components/Context';
// import HookCounterThree from './components/HookCounterThree'
// import HookCounterFour from './components/HookCounterFour'
// import ClickEffects from './components/UseEffects'
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer'
export const userContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Ritheesh'}>

        {/* <Button /> */}
        {/* <HookCounterTwo/> */}
        {/* <ThemedButton /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClickEffects /> */}
        {/* <HookMouse /> */}
        {/* <IntervalHookCounter /> */}
        {/* <MouseContainer /> */}
        <DataFetching />
      </userContext.Provider>
    </div>
  );
}

export default App;
