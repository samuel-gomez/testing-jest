import React, {useState} from 'react'
import {ThemeProvider} from 'emotion-theming'
import SwitchTheme from './Switcher'
import Calculator from './calculator'
import * as themes from './themes'

function App() {
  const [theme, setTheme] = useState('dark')
  const handleThemeChange = ({target: {value}}) => setTheme(value)

  return (
    <div>
      <ThemeProvider theme={themes[theme]}>
        <Calculator />
        <SwitchTheme handleThemeChange={handleThemeChange} theme={theme} />
        <div style={{marginTop: 30, textAlign: 'center'}}>
          Calculator component{' '}
          <a href="https://codepen.io/mjijackson/pen/xOzyGX">created</a>
          {' by '}
          <br />
          <a href="https://twitter.com/mjackson">Michael Jackson</a> of{' '}
          <a href="https://reacttraining.com/">React Training</a>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default App

/* eslint import/namespace:0 */
