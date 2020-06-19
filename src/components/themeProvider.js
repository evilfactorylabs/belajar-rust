import * as React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

import { default as defaultTheme } from './theme'

import Header from './Header'

import './styles.css'

export default function ThemeProvider({ children, theme = {}, location }) {
  return (
    <div>
      <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Header location={location} />
        {children}
      </EmotionThemeProvider>
    </div>
  )
}
