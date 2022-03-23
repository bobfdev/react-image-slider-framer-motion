import styled from 'styled-components'
import { motion } from 'framer-motion';

export const Carousel = styled(motion.div)`
    overflow: hidden;
    cursor: grab;
    background-color: red;
`

export const InnerCarousel = styled(motion.div)`
    display: flex;
    background-color: lightblue;
`

export const ImageCarousel = styled(motion.div)`
    min-height: 40rem;
    min-width: 30rem;
    padding: 40px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        pointer-events: none;
    }
`