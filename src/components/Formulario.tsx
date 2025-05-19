import { useContato } from "@/contexts/ContatosContext";
import { useEnderecoService } from "@/resources/Endereco.service";
import { Endereco } from "@/types/Endereco";
import { useState } from "react";

export const Formulario = () => {
    const contatoCtx = useContato();
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [uf, setUF] = useState('');
    const [localidade, setLocalidade] = useState('');
    const service = useEnderecoService();
    const [buscar, setBuscar] = useState<Boolean>(true)
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');



    const handlePesquisarCep = async () => {
        setBuscar(false);
        try {
            if (!(!/^\d{8}$/.test(cep))) {
                const response = await service.buscas(cep);
                setLogradouro(response.logradouro);
                setBairro(response.bairro);
                setUF(response.uf);
                setLocalidade(response.localidade)
            } else {
                alert('CEP em formato invalido')
            }
        } catch (error) {
            alert('Cep invalido ou não encontrado')
        }finally{
            setBuscar(true);
        }
        
    }

    const handleSubimit = (e: any) => {
        e.preventDefault()
        contatoCtx?.addContato(
            nome,
            telefone,
            whatsapp,
            {
                cep: cep,
                logradouro: logradouro,
                numero: numero,
                bairro: bairro,
                localidade: localidade,
                uf: uf
            }
        )
        console.log(contatoCtx?.contatos)
    }

    const handleLimparCampos = () => {
        setLogradouro('');
        setBairro('');
        setCep('');
        setUF('');
        setLocalidade('');
        setNumero('');
        setNome('');
        setTelefone('');
        setWhatsapp('');
    }
    return (
        <form onSubmit={handleSubimit}>
            <div className="flex flex-col gap-2 bg-white p-10 rounded-2xl w-full max-w-xl">
                <div className="flex flex-col gap-2 w-full">
                    <label className="item">Nome: </label>
                    <input type="text"
                        required
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome"
                        className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 w-full">
                    <div>
                        <label className="w-22">Telefone: </label>
                        <input type="text"
                            required    
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            placeholder="Digite o Telefone"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="w-22">Whatsapp: </label>
                        <input type="text"
                            required
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                            placeholder="Digite o Whatsapp"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                </div>
                <hr className="bg-sky-300 my-5" />

                <div className="flex items-center gap-2 w-full">
                    <label className="w-26">CEP: </label>
                    <input type="text"
                        required
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                        placeholder="CEP"
                        className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                    />
                    <button type="button" onClick={handlePesquisarCep} className="p-2 w-20 h-10 items-center justify-center bg-indigo-300 rounded-md cursor-pointer hover:bg-indigo-200">
                        {
                            buscar ?
                                'Buscar' :
                                <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                        }
                    </button>
                </div>
                <div className="flex items-center gap-2 w-full">
                    <label className="w-22">Endereço: </label>
                    <input type="text"
                        required
                        value={logradouro}
                        onChange={e => setLogradouro(e.target.value)}
                        placeholder="Digite o Endereço"
                        className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                    />
                </div>
                <div className="flex items-center gap-2 w-full">
                    <div className="flex items-center flex-3">
                        <label className="w-26">Bairro: </label>
                        <input type="text"
                            required
                            value={bairro}
                            onChange={e => setBairro(e.target.value)}
                            placeholder="Digite o Bairro"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center flex-1">
                        <label className="pr-2">Nº: </label>
                        <input type="text"
                            required
                            value={numero}
                            onChange={e => setNumero(e.target.value)}
                            placeholder="Número"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2 w-full">
                    <div className="flex items-center flex-1">
                        <label className="w-40">UF: </label>
                        <input type="text"
                            required
                            value={uf}
                            onChange={e => setUF(e.target.value)}
                            placeholder="Selecione a UF"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center flex-3">
                        <label className="pr-2">Cidade </label>
                        <input type="text"
                            required
                            value={localidade}
                            onChange={e => setLocalidade(e.target.value)}
                            placeholder="Cidade"
                            className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex gap-10 items-center justify-center mt-5">
                    <button onClick={handleLimparCampos} type="button" className="px-4 py-2 bg-red-500 rounded-md text-white cursor-pointer hover:bg-red-400">Limpar</button>
                    <button type="submit" className="px-4 py-2 bg-indigo-500 rounded-md text-white cursor-pointer hover:bg-indigo-400">Adicionar</button>
                </div>
            </div>
        </form>
    )
}