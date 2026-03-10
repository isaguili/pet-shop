//cria classe de erros de validação do formulário
export class ValidationErrors {
  constructor(message) {
    this.message = message;
  }
}

//checa número de telefone
export function checkPhoneNumber(phone) {
  if (phone.length < 15) {
    throw new ValidationErrors("Digite um número de telefone válido (XX) XXXXX XXXX.");
  }
}
