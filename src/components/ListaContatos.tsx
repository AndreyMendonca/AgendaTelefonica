import { useContato } from "@/contexts/ContatosContext"
import { ContatoComp } from "./ContatoComp";

export const ListaContatos = () =>{
    const contatoCtx = useContato();

    return (
        <div className="flex flex-col gap-2 bg-white p-10 rounded-2xl">
            {
                contatoCtx?.contatos.map(contato => (
                    <ContatoComp key={contato.id} contato={contato} />
                ))
            }
        </div>
    )
}