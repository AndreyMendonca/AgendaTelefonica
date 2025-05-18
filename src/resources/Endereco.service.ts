import { Endereco } from "@/types/Endereco";

class EnderecoService {
    baseURL: string = "https://viacep.com.br/ws/"

    async buscas(cep: string): Promise<Endereco>{
        const url = this.baseURL + `${cep}/json/`;
        const response = await fetch(url);

        if(response.status === 400){
            throw new Error()
        }
        const json = await response.json();
        if(json.erro){
            throw new Error()
        }
        const endereco:Endereco = json;
        return endereco;
    }
}

export const useEnderecoService = () => new EnderecoService();