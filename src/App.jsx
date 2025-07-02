import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import bannerBackground from "./assets/banner.png"
import Gallery from "./components/Gallery"

import pictures from "./fotos.json"
import { useState } from "react"

const GradientBackground = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const[picturesFromGallery, setPicturesFromGallery] = useState(pictures)

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner 
              texto="The most completed galary of space!"
              backgroundImage={bannerBackground}
            />
            <Gallery photos={picturesFromGallery} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
    </GradientBackground>
  )
}

export default App
