import { Contato } from "@/types/Contato";
import { Endereco } from "@/types/Endereco";
import { title } from "process";

type AddAction = {
    type: 'add';
    payload: {
        nome: string;
        telefone: string;
        whatsapp: string;
        endereco: Endereco;
    }
}

type ContatoActions = AddAction;

export const contatoReducer = (contatos: Contato[], action: ContatoActions) =>{
    switch(action.type){
        case 'add':
            return [...contatos, {
                id: contatos.length,
                nome: action.payload.nome,
                telefone: action.payload.telefone,
                whatsapp: action.payload.whatsapp,
                endereco:  action.payload.endereco
            }]
        default:
            return contatos;
    }

}