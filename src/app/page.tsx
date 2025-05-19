'use client'
import { Formulario } from "@/components/Formulario";
import { ListaContatos } from "@/components/ListaContatos";
import { ContatoProvider, useContato } from "@/contexts/ContatosContext";

const Page = () => {
  return (
    <ContatoProvider>
      <div className="bg-indigo-600 min-h-screen flex flex-col">
        <h1 className="text-center m-2 text-4xl ">Agenda Telefonica usando Context e Reducer</h1>
        <div className="container mx-auto max-w-screen-xl px-6 flex gap-3 flex-col md:flex-row items-center justify-between">
          <div className="flex-1">
            <Formulario />
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 h-[80vh] overflow-y-auto shadow">
              <ListaContatos />
            </div>
          </div>
        </div>
      </div>
    </ContatoProvider>
  )
}

export default Page;