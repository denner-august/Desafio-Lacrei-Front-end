import { useContext } from "react";
import { Context } from "context/context";
import { Navigation } from "functions/navigation";
import { Container } from "./footerStyles";

import instagram from '../../public/imagens/InstagramLogo.png'
import facebook from '../../public/imagens/FacebookLogo.png'
import linkedin from '../../public/imagens/LinkedinLogo.png'
import Image from "next/image";

export function Footer() {

    const { linkActiveNow } = useContext(Context)

    function renderIcons() {
        const icons = [facebook, instagram, linkedin]

        return icons.map((item, index) => {
            return <Image className="Social" src={item} width={32} height={32} alt="teste" key={index} />
        })

    }

    return (
        <Container linkActive={linkActiveNow}>
            <ul className="links">
                {Navigation()}
            </ul>

            <ul className="ContainerSocial">
                {renderIcons()}
            </ul>


            <p>Desafio Front-end Lacrei</p>
        </Container>
    )
}