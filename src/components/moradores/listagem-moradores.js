import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from "@mui/material/ImageList";
import axios from 'axios'
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
import { DeletarItem } from '../btn_acao/btn-delet';
import { useRouter } from 'next/router'
import { baseURL } from '../api/api';

export const ListaMoradores = () => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [morador, setMorador] = useState([])
  const router = useRouter()

// EXCLUSÃO DE MORADORES
  async function handleDelete(idPessoa) {
    try {
      await axios.delete(baseURL + 'morador/' + `${idPessoa}`)
      .then(() => {
        const novaLista = morador.filter((morador) => morador.idPessoa !== idPessoa)
        setMorador(novaLista)
      })
    } catch (error) {
      console.error('ops, erro ao deletar ' + error);
    }
  }

// LISTAGEM DE MORADORES POR ID
  async function handleFindOne(tipoPessoa) {
    try {
      router.push(`/telas_acao/morador/btn-info?data=${JSON.stringify(tipoPessoa.idPessoa)}`)

    } catch (error) {
      console.error('ops, erro ao listar id ' + error);
    }
  }

// ATUALIZAÇÃO DE MORADORES
  async function handleUpdate(tipoPessoa) {
    try {
      router.push(`/telas_acao/morador/btn-edit?data=${JSON.stringify(tipoPessoa.idPessoa)}`)
      
    } catch (error) {
      console.error('ops, erro ao editar id ' + error);
    }
  }
// LISTAGEM DE MORADORES
  useEffect(() => {
    axios.get(baseURL + "morador")
      .then((response) => {
        setMorador(response.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = morador.map((morador) => morador.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = morador;

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
                  checked={selectedCustomerIds.length === morador.length}
                  color="primary"
                  indeterminate={
                    selectedCustomerIds.length > 0
                    && selectedCustomerIds.length < morador.length
                  }
                  onChange={handleSelectAll}
                />
                </TableCell>
                <TableCell>
                  Nome
                </TableCell>
                <TableCell>
                  Documento
                </TableCell>
                <TableCell>
                  E-mail
                </TableCell>
                <TableCell>
                  Telefone
                </TableCell>
                <TableCell>
                  AP/Casa
                </TableCell>
                <TableCell>
                  Ação
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {morador.slice(0, limit).map((morador) => (
                <TableRow
                  hover
                  key={morador.id}
                  selected={selectedCustomerIds.indexOf(morador.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(morador.id) !== -1}
                      onChange={(event) => handleSelectOne(event, morador.id)}
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
                        {morador.nomePessoa}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {morador.documento}
                  </TableCell>
                  <TableCell>
                    {` ${morador.email}`}
                  </TableCell>
                  <TableCell>
                    {morador.telefoneID}
                  </TableCell>
                  <TableCell>
                    {morador.Endereco?.lote}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: 'flex',
                      gap: '5px'
                    }}>
          
                      <Button
                        color="success"
                        variant="contained"
                        onClick={() => handleFindOne(morador)}
                      >
                        <InfoIcon />
                      </Button>
                    
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleUpdate(morador)}
                      >
                        <EditIcon />
                      </Button>

                    <DeletarItem 
                      onDelete={() => handleDelete(morador.idPessoa) }
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
        count={morador.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};


