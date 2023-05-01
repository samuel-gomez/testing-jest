import React from 'react'
import {render as renderRTL} from '@testing-library/react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'emotion-theming'
import {dark} from './../src/themes'

const render = (ui, {theme = dark, ...options}) => {
  const Wrapper = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  Wrapper.propTypes = {
    children: PropTypes.node,
  }
  return renderRTL(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render}
