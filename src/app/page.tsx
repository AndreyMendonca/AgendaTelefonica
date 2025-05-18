'use client'

import { ContatoProvider } from "@/contexts/ContatosContext";
import { useEnderecoService } from "@/resources/Endereco.service";
import { Endereco } from "@/types/Endereco";
import { useState } from "react";

const Page = () => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [uf, setUF] = useState('');
  const [localidade, setLocalidade] = useState('');
  const service = useEnderecoService();
  const [endereco, setEndereco] = useState<Endereco | null>(null)
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');


  const handlePesquisarCep = async () => {
    try {
      if (!(!/^\d{8}$/.test(cep))) {
        const response = await service.buscas(cep);
        setEndereco(response);
        setLogradouro(response.logradouro);
        setBairro(response.bairro);
        setUF(response.uf);
        setLocalidade(response.localidade)
      } else {
        alert('CEP em formato invalido')
      }
    } catch (error) {
      alert('Cep invalido ou não encontrado')
    }
  }


  return (
    <>
      <div className="bg-indigo-600 min-h-screen flex flex-col items-center">
        <div className="flex flex-col gap-2 bg-white p-10 rounded-2xl w-full max-w-xl">
          <div className="flex flex-col gap-2 w-full">
            <label className="item">Nome: </label>
            <input type="text"
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
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
                placeholder="Digite o Telefone"
                className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="w-22">Whatsapp: </label>
              <input type="text"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                placeholder="Digite o Whatsapp"
                className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              />
            </div>
          </div>
          <hr className="bg-sky-300 my-5" />

          <div className="flex items-center gap-2 w-full">
            <label className="w-22">CEP: </label>
            <input type="text"
              name={cep}
              onChange={e => setCep(e.target.value)}
              placeholder="CEP"
              className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <label className="w-22">Endereço: </label>
            <input type="text"
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
                value={bairro}
                onChange={e => setBairro(e.target.value)}
                placeholder="Digite o Bairro"
                className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center flex-1">
              <label className="pr-2">Nº: </label>
              <input type="text"
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
                value={uf}
                onChange={e => setUF(e.target.value)}
                placeholder="Selecione a UF"
                className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center flex-3">
              <label className="pr-2">Cidade </label>
              <input type="text"
                value={localidade}
                onChange={e => setLocalidade(e.target.value)}
                placeholder="Cidade"
                className="bg-indigo-50 border border-indigo-400 rounded-md p-2 w-full focus:ring-1 focus:ring-indigo-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <button onClick={handlePesquisarCep}>Buscar</button>
      </div>
      <p>
        {
          endereco !== null ? `Endereco ${endereco?.logradouro} - ${endereco?.bairro} - ${endereco?.localidade}/${endereco?.uf}` : ''
        }
      </p>
    </>
  )
}

export default Page;