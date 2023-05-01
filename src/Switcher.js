import React from 'react'
import PropTypes from 'prop-types'

const SwitchTheme = ({handleThemeChange, theme}) => (
  <div style={{marginTop: 30}}>
    <fieldset>
      <legend>Theme</legend>
      <label>
        <input
          onChange={handleThemeChange}
          checked={theme === 'light'}
          type="radio"
          name="theme"
          value="light"
        />{' '}
        light
      </label>
      <label>
        <input
          onChange={handleThemeChange}
          checked={theme === 'dark'}
          type="radio"
          name="theme"
          value="dark"
        />{' '}
        dark
      </label>
    </fieldset>
  </div>
)

SwitchTheme.propTypes = {
  handleThemeChange: PropTypes.func,
  theme: PropTypes.string,
}

export default SwitchTheme
