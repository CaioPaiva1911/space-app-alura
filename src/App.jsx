import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"

function App() {

  const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
  `

  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
    </GradientBackground>
  )
}

export default App
