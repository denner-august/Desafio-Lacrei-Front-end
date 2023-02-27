import { Container } from "./styles/renderImageStyles";
import Image, { StaticImageData } from "next/image";

interface renderImageProps {
    imagem: StaticImageData
}

export function RenderImage({ imagem }: renderImageProps) {
    return (
        <Container className="renderImage">
            <Image className="image" src={imagem} alt="imagem de medica" />
        </Container>
    )
}