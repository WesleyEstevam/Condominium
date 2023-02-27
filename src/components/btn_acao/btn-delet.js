import Swal from 'sweetalert2';

export function DeletarItem() {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não será capaz de reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excluído!',
          'O registro foi excluído.',
          'success'
        )
      }
    })
  }