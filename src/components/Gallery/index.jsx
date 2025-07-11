import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";


const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`

const FluidSection = styled.section`
    flex-grow: 1;
`

const ContainerImages = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Gallery = ({ photos = [], setTag, onSelectedPhoto, onChangeFavorite }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ContainerImages>
                        {photos.map(photo => <Image
                            onZoomCalled={onSelectedPhoto}
                            onChangeFavorite={onChangeFavorite}
                            key={photo.id}
                            photo={photo} />)
                        }
                    </ContainerImages>
                </FluidSection>
                <Popular />
            </GalleryContainer>
        </>
    )
}

export default Gallery