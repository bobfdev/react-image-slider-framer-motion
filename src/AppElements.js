import styled from 'styled-components'

export const Carousel = styled.div`
    overflow: hidden;
    cursor: grab;
    background-color: red;
`

export const InnerCarousel = styled.div`
    display: flex;
    background-color: lightblue;
`

export const ImageCarousel = styled.div`
    min-height: 40rem;
    min-width: 30rem;
    padding: 40px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
    }
`