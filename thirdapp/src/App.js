// import './App.css'
// import StyleTest from './components/StyleTest'
// import Button from './components/Button'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'
import TodoList from './components/TodoList'
import TodoListNew from './components/TodoListNew'

function App() {
  return (
    <div className="App">
      {/* <p className="main_text">안녕하세요</p> */}
      {/* <StyleTest /> */}
      {/* <Button size="large" />
      <Button size="small" />
      <Button color="red" />
      <Button color="royalblue" /> */}
      {/* <Button /> */}
      {/* <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button />
      </ThemeProvider> */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <TodoList /> */}
        <TodoListNew />
      </ThemeProvider>
    </div>
  )
}

export default App
