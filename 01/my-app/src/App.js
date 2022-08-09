import React, {useContext, useReducer} from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.dark);

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const jm = () => dispatch({type: 'decrement'})
  const ja = () => dispatch({type: 'increment'})

  return (
    <>
      Count: {state.count}
      <button onClick={jm}>-</button>
      <button onClick={ja}>+</button>
    </>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <>
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
    <hr />
    <Counter />
    </>
  );
}
export default App