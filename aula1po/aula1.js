const prompt = require(`prompt-sync`)();



class Cliente {
   // # -> priva o dado 
   #nome; //atributo
   idade;
   cpf;
   agencia;

  getDescricao(){
   return "Nome : " + this.#nome + " , idade: " + this.idade;


  }
      

    getnome(){
         return this.#nome;
   }
    setNOME(value){
        this.#nome = value;

   }nade 
}

let cliente = new Cliente();

cliente.setNOME();

cliente.setNOME(prompt("digite o nome do cliente"));
cliente.idade = 21;
cliente.cpf = "111.111.111-22"
cliente.agencia = 10101010;

console.log(cliente);
console.log(cliente.getdexcricao());

