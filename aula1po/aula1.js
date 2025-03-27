const prompt = require(`prompt-sync`)();



class Cliente {
   nome;
   idade;
   cpf;
   agencia;
}

let cliente = new Cliente();

cliente.nome = prompt("digite o nome do cliente");
cliente.idade = 21;
cliente.cpf = "111.111.111-22"
cliente.agencia = 10101010;

console.log(cliente);

