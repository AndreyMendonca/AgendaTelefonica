'use client'
import { Formulario } from "@/components/Formulario";
import { ListaContatos } from "@/components/ListaContatos";
import { ContatoProvider, useContato } from "@/contexts/ContatosContext";

const Page = () => {
  return (
    <ContatoProvider>
      <div className="bg-indigo-600 min-h-screen flex ">
        <div className="container mx-auto flex items-center justify-center">
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