import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { baseURL } from '../api/api'; 
//import { useRouter } from 'next/router';

export function DeletarItem(props) {
  const { idPessoa } = props;
  //const router = useRouter()

  async function handleDelete() {
    try {
      await axios.delete(baseURL + 'visitante/' + `${idPessoa}`)

    } catch (error) {
      console.error('ops, erro ao deletar ' + error);
    }
  }

  function confirmDelete() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não será capaz de reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire('Excluído!', 'O registro foi excluído.', 'success');
      }
    });
  }

  return (
    <button onClick={confirmDelete} className="delete-button">
      Excluir
    </button>
  );
}

DeletarItem.propTypes = {
  idPessoa: PropTypes.number.isRequired
};
