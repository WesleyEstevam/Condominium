import Swal from "sweetalert2";

export function alerta() {
    Swal.fire(
      'Bom trabalho!',
      'Registro atualizado com sucesso!',
      'success'
    )
  }


export function alertaCadastro() {
    Swal.fire(
      'Bom trabalho!',
      'Registro cadastrado com sucesso!',
      'success'
    )
  }