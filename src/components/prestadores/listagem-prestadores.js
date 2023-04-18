import { useState, useEffect } from 'react';
import { DeletarItem } from '../btn_acao/btn-delet';
import { useRouter } from 'next/router';
import { baseURL } from '../api/api';
import {
  Box,
  Card,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from "@mui/material/ImageList";
import axios from 'axios'


export const ListaPrestadores = () => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [prestador, setPrestador] = useState([])
  const router = useRouter()

// EXCLUSÃO DE MORADORES
  async function handleDelete(idPessoa) {
    try {
      await axios.delete(baseURL + 'prestador/' + `${idPessoa}`)
      .then(() => {
        const novaLista = prestador.filter((prestador) => prestador.idPessoa !== idPessoa)
        setPrestador(novaLista)
      })
    } catch (error) {
      console.error('ops, erro ao deletar ' + error);
    }
  }

// LISTAGEM DE PRESTADORES POR ID
  async function handleFindOne(tipoPessoa) {
    try {
      router.push(`/telas_acao/prestador/btn-info?data=${JSON.stringify(tipoPessoa.idPessoa)}`)

    } catch (error) {
      console.error('ops, erro ao listar id ' + error);
    }
  }

// ATUALIZAÇÃO DE PRESTADORES
  async function handleUpdate(tipoPessoa) {
    try {
      router.push(`/telas_acao/prestador/btn-edit?data=${JSON.stringify(tipoPessoa.idPessoa)}`)
      
    } catch (error) {
      console.error('ops, erro ao editar id ' + error);
    }
  }
// LISTAGEM DE PRESTADORES
  useEffect(() => {
    axios.get(baseURL + "prestador")
      .then((response) => {
        setPrestador(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = visitante.map((visitante) => visitante.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = visitante;

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
                    checked={selectedCustomerIds.length === prestador.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < prestador.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nome
                </TableCell>
                <TableCell>
                  Cargo
                </TableCell>
                <TableCell>
                  Documento
                </TableCell>
                <TableCell>
                  Empresa
                </TableCell>
                <TableCell>
                  Ação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prestador.slice(0, limit).map((prestador) => (
                <TableRow
                  hover
                  key={prestador.id}
                  selected={selectedCustomerIds.indexOf(prestador.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(prestador.id) !== -1}
                      onChange={(event) => handleSelectOne(event, prestador.id)}
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
                        {prestador.nomePessoa}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    {prestador.documento}
                  </TableCell>
                  <TableCell>
                  {prestador.empresa}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: 'flex',
                      gap: '5px'
                    }}>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() => handleFindOne(prestador)}
                      >
                        <InfoIcon />
                      </Button>
                    
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleUpdate(prestador)}
                      >
                        <EditIcon />
                      </Button>

                    <DeletarItem 
                      onDelete={() => handleDelete(prestador.idPessoa) }
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
        count={prestador.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};


