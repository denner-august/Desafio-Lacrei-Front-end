import imagem1 from "/public/imagens/rafiki 2.png";
import imagem2 from "../public/imagens/rafiki3.png";
import imagem3 from "../public/imagens/profissional 1.png";
import { StaticImageData } from "next/image";

type imagens = {
  imagem1: StaticImageData;
  imagem2: StaticImageData;
  imagem3: StaticImageData;
};

export const imagens: imagens = {
  imagem1,
  imagem2,
  imagem3,
};
