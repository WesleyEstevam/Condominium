import { useState } from 'react';
import Swal from 'sweetalert2';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

export function AlocarDestino() {
  // Estado para guardar os valores do formulário
  const [formValues, setFormValues] = useState({
    nomeMorador: '',
    dataHora: '',
    quadra: '',
    lote: '',
    bloco: '',
    apartamento: '',
    descricao: '',
  });


  // Função para atualizar o estado com os valores do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleFormSubmit = () => {
    // Fazer algo com os valores do formulário, como enviá-los para um servidor
    console.log(formValues);
    // Fechar o modal
    Swal.close();
  };

  return (
    <>
      <Button
        color="warning"
        variant="contained"
        onClick={() =>
          Swal.fire({
            html:
              ` <div>
              <h2>Destino do Visitante</h2>
              <form>
                <div className="bloco1">
                  <label htmlFor="nome-morador">Nome do Morador:</label>
                  <input
                    type="text"
                    id="nome-morador"
                    class="swal2-input"
                    name="nomeMorador"
                    value="${formValues.nomeMorador}"
                    onChange="${handleInputChange}"
                  />

                  <label htmlFor="data-hora">Data/hora:</label>
                  <input
                    type="datetime-local"
                    id="data-hora"
                    class="swal2-input"
                    name="dataHora"
                    value="${formValues.dataHora}"
                    onChange="${handleInputChange}"
                  />
                </div>

                <div className="bloco2">
                  <label htmlFor="quadra">Quadra:</label>
                  <input
                    type="text"
                    id="quadra"
                    class="swal2-input"
                    name="quadra"
                    value="${formValues.quadra}"
                    onChange="${handleInputChange}"
                  />

                  <label htmlFor="lote">Lote:</label>
                  <input
                    type="text"
                    id="lote"
                    class="swal2-input"
                    name="lote"
                    value="${formValues.lote}"
                    onChange="${handleInputChange}"
                  />

                  <label htmlFor="bloco">Bloco:</label>
                  <input
                    type="text"
                    id="bloco"
                    class="swal2-input"
                    name="bloco"
                    value="${formValues.bloco}"
                    onChange="${handleInputChange}"
                  />

                  <label htmlFor="apartamento">Apartamento:</label>
                  <input
                    type="text"
                    id="apartamento"
                    class="swal2-input"
                    name="apartamento"
                    value="${formValues.apartamento}"
                    onChange="${handleInputChange}"
                  />
                </div>

                <label htmlFor="descricao">Descrição:</label>
                <textarea
                  cols="50"
                  rows="20"
                  id="descricao"
                  class="swal2-input"
                  name="descricao"
                  value="${formValues.descricao}"
                  onChange="${handleInputChange}"
                ></textarea>
              </form>
            `,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            width: '60%',
            position: 'right',
            cancelButtonText: 'Cancelar',
            focusConfirm: false,
            preConfirm: () => {
              // Aqui você pode adicionar a lógica para salvar os dados do formulário.
              // Caso ocorra algum erro, retorne uma Promise rejeitada para manter o modal aberto.
              return Promise.resolve();
            },
            customClass: {
              
            }
          })
        }
      >
        <HomeIcon />
      </Button>
    </>
  );
};