import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DeletarItem } from '../btn_acao/btn-delet';
import { baseURL } from '../api/api';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from "@mui/material/ImageList";
import axios from 'axios'

import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

export const ListaOcorrencia = () => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [ocorrencia, setOcorrencia] = useState([])
  const router = useRouter()

// EXCLUSÃO DE OCORRENCIAS
  async function handleDelete(idPessoa) {
    try {
      await axios.delete(baseURL + 'ocorrencia/' + `${idPessoa}`)
      .then(() => {
        const novaLista = ocorrencia.filter((ocorrencia) => ocorrencia.idPessoa !== idPessoa)
        setOcorrencia(novaLista)
      })
    } catch (error) {
      console.error('ops, erro ao deletar ' + error);
    }
  }

// LISTAGEM DE OCORRENCIAS POR ID
  async function handleFindOne(listaOcorrencia) {
    try {
      router.push(`/telas_acao/ocorrencia/btn-info?data=${JSON.stringify(listaOcorrencia.idOcorrencia)}`)
    } catch (error) {
      console.error('ops, erro ao listar id ' + error);
    }
  }

// ATUALIZAÇÃO DE OCORRENCIAS
  async function handleUpdate(atualizarOcorrencia) {
    try {
      router.push(`/telas_acao/ocorrencia/btn-edit?data=${JSON.stringify(atualizarOcorrencia.idOcorrencia)}`)
      
    } catch (error) {
      console.error('ops, erro ao editar id ' + error);
    }
  }
// LISTAGEM DE OCORRENCIAS
  useEffect(() => {
    axios.get(baseURL + "ocorrencia")
      .then((response) => {
        setOcorrencia(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = ocorrencia.map((ocorrencia) => ocorrencia.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = ocorrencia;

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <ImageList
        sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
          gridAutoColumns: "minmax(160px, 1fr)"
        }}
      >
        <Box sx={{ minWidth: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === ocorrencia.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < ocorrencia.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nome Porteiro
                </TableCell>
                <TableCell>
                  Descrição
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Tipo
                </TableCell>
                <TableCell>
                  Data/Hora
                </TableCell>
                <TableCell>
                  Ação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ocorrencia.slice(0, limit).map((ocorrencias) => (
                <TableRow
                  hover
                  key={ocorrencias.id}
                  selected={selectedCustomerIds.indexOf(ocorrencias.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(ocorrencias.id) !== -1}
                      onChange={(event) => handleSelectOne(event, ocorrencias.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {ocorrencias.nomePorteiro}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {ocorrencias.descOcorrencia}
                  </TableCell>
                  <TableCell>
                    {ocorrencias.statusOcorrencia.descStatusOcorrencia}
                  </TableCell>
                  <TableCell>
                    {ocorrencias.tipoOcorrencia.descTipoOcorrencia}
                  </TableCell>
                  <TableCell>
                    {ocorrencias.dataOcorrencia}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: 'flex',
                      gap: '5px'
                    }}>
          
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() => handleFindOne(ocorrencias)}
                      >
                        <InfoIcon />
                      </Button>
                    
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleUpdate(ocorrencias)}
                      >
                        <EditIcon />
                      </Button>

                    <DeletarItem 
                      onDelete={() => handleDelete(ocorrencias.idPessoa) }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </ImageList>
      <TablePagination
        component="div"
        count={ocorrencia.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};


