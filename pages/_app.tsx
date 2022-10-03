import {ThemeProvider,createTheme,CssBaseline} from '@mui/material';
import '../styles/globals.css'

import { darkTheme, lightTheme } from '../themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
