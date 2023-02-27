import { StaticImageData } from "next/image";

export interface ContextProviderProps {
  linkActiveNow: number;
  setLinkActiveNow: (value: number) => void;
  rotas: (index: number) => void;
}
export interface main_descricao_Props {
  titulo: string;
  descricao: string;
  buttons: boolean;
  imagem?: StaticImageData;
}
