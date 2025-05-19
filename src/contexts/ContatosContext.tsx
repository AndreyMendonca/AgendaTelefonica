'use client'
import { contatoReducer } from "@/reducers/contatoReducer";
import { Contato } from "@/types/Contato"
import { Endereco } from "@/types/Endereco";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";


const STORAGE_KEY= 'ContatosContextContent'

type ContatoContextType = {
    contatos: Contato[];
    addContato: (nome: string, telefone: string, whatsapp: string, endereco: Endereco) => void;
}

export const ContatoContext = createContext<ContatoContextType | null>(null);


export const ContatoProvider = ({children}:{children:ReactNode}) =>{
    const [contatos, dispatch] = useReducer(contatoReducer,
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );

    useEffect(() =>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contatos))
    },[contatos]);

    const addContato = (nome: string, telefone: string, whatsapp: string, endereco: Endereco) => {
        dispatch({
            type: 'add',
            payload: {nome, telefone, whatsapp, endereco}
        })
    }

    return (
        <ContatoContext.Provider value={{contatos, addContato}}>
            {children}
        </ContatoContext.Provider>
    )
}

export const useContato = () => useContext(ContatoContext);
