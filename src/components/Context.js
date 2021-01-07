import React,{ useContext } from "react";

const themes = {
    dark: {
      foreground: "red",
      background: "black"
    },
    light: {
      foreground: "green",
      background: "white"
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }

  export default ThemedButton