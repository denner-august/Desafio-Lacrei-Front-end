import { Container } from "./styles/renderImageStyles";
import Image from "next/image";

import image1 from '../../public/imagens/rafiki 2.svg'

export function RenderImage() {
    return (
        <Container className="renderImage">
            <Image className="image" src={image1} alt="teste" />
        </Container>
    )
}