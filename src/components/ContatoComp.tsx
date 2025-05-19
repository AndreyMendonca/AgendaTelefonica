import { Contato } from "@/types/Contato"

type Props = {
    contato: Contato;
}

export const ContatoComp = ({ contato }: Props) => {
    return (
        <div className="border-2 border-dotted border-gray-500 p-5 rounded-md">
            <div className="flex gap-4">
                <p className="text-xl font-bold">Nome:</p>
                <p className="text-xl">{contato.nome}</p>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-4">
                    <p className="text-xl font-bold">Telefone:</p>
                    <p className="text-xl">{contato.telefone}</p>
                </div>
                <div className="flex gap-4">
                    <p className="text-xl font-bold">Whatsapp:</p>
                    <p className="text-xl">{contato.whatsapp}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <p className="text-xl font-bold">Endereço:</p>
                <p className="text-xl">{contato.endereco.logradouro} - Nº {contato.endereco.numero} - {contato.endereco.bairro} - {contato.endereco.localidade}/{contato.endereco.uf.toLocaleUpperCase()}</p>
            </div>
        </div>
    )
}