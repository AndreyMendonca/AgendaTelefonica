import { Endereco } from "./Endereco";

export type Contato = {
    id: number;
    nome: string;
    telefone: string;
    whatsapp: string;
    endereco: Endereco;
}

