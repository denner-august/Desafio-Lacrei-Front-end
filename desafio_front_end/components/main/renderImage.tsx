import { Container } from "./styles/renderImageStyles";
import Image from "next/image";

interface renderImageProps {
    imagem: string
}

export function RenderImage({ imagem }: renderImageProps) {
    return (
        <Container className="renderImage">
            <Image className="image" src={imagem} alt="imagem de medica" />
        </Container>
    )
}