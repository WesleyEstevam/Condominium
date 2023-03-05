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
              `<div>
                <h2></h2>
                <form>
                  <label htmlFor="nome-morador">Nome do Morador:</label>
                  <input
                    type="text"
                    id="nome-morador"
                    name="nomeMorador"
                    value={formValues.nomeMorador}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="data-hora">Data/hora:</label>
                  <input
                    type="datetime-local"
                    id="data-hora"
                    name="dataHora"
                    value={formValues.dataHora}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="quadra">Quadra:</label>
                  <input
                    type="text"
                    id="quadra"
                    name="quadra"
                    value={formValues.quadra}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="lote">Lote:</label>
                  <input
                    type="text"
                    id="lote"
                    name="lote"
                    value={formValues.lote}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="bloco">Bloco:</label>
                  <input
                    type="text"
                    id="bloco"
                    name="bloco"
                    value={formValues.bloco}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="apartamento">Apartamento:</label>
                  <input
                    type="text"
                    id="apartamento"
                    name="apartamento"
                    value={formValues.apartamento}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="descricao">Descrição:</label>
                  <textarea
                    id="descricao"
                    name="descricao"
                    value={formValues.descricao}
                    onChange={handleInputChange}
                  ></textarea>
                </form>
              </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            cancelButtonText: 'Cancelar',
            focusCancel: true,
            preConfirm: handleFormSubmit,
          })
        }
      >
        <HomeIcon />
      </Button>
    </>
  );
};