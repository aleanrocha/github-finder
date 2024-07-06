import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './screens/Home'
import GlobalStyles from './styles/GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
)
