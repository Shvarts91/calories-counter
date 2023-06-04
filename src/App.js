import './App.css'
import FormFinalGroup from './components/FormFinalGroup'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <FormFinalGroup />
      </div>
    </ThemeProvider>
  )
}

export default App
