import Cliente from "./Cliente";

export default interface clienteRepositorio {
    salvar(cliente: Cliente) : Promise<Cliente>
    excluir(cliente: Cliente) : Promise<void>
    obterTodos(): Promise<Cliente[]>
}