import './App.css';
// import DataFetching from './components/DataFetching';
// import React, { useReducer } from 'react'
// import CounterOne from './components/CounterOne'
// import CounterTwo from './components/CounterTwo'
// import IntervalHookCounter from './components/IntervalHookCounter';
// import Button from './components/HookCounter'
// import HookCounterTwo from './components/HookCounterTwo'
// import ThemedButton from './components/Context';
// import HookCounterThree from './components/HookCounterThree'
// import HookCounterFour from './components/HookCounterFour'
// import ClickEffects from './components/UseEffects'
// import HookMouse from './components/HookMouse'
// import MouseContainer from './components/MouseContainer'
// import CounterThree from './components/CounterThree'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'
// import DataFetchingOne from './components/DataFetchingOne'
// import DataFetchingTwo from './components/DataFetchingTwo'
// import ParentComponent from './components/ParentComponent';
// import Counter from './components/Counter'
// import FocusInput from './components/FocusInput'
import ClassTimer from './components/ClassTimer'
import HookTimer from './components/HookTimer'

// export const CountContext = React.createContext()

// export const userContext = React.createContext()
// export const ChannelContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return initialState
//     default:
//       return state
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
//       <div className="App">

//         {/* <userContext.Provider value={'Ritheesh'}> */}

//         {/* <Button /> */}
//         {/* <HookCounterTwo/> */}
//         {/* <ThemedButton /> */}
//         {/* <HookCounterThree /> */}
//         {/* <HookCounterFour /> */}
//         {/* <ClickEffects /> */}
//         {/* <HookMouse /> */}
//         {/* <IntervalHookCounter /> */}
//         {/* <MouseContainer /> */}
//         {/* <DataFetching /> */}
//         {/* <CounterOne/> */}
//         {/* <CounterTwo /> */}
//         {/* <CounterThree /> */}
//         {/* </userContext.Provider> */}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }


function App() {
  return (
    <div className='App'>
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent/> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      <ClassTimer />
      <HookTimer/>
    </div>
  )
}


export default App;
