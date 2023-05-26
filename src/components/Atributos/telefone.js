import EditIcon from '@mui/icons-material/Edit';
import ImageList from "@mui/material/ImageList";
import { DeletarItem } from '../btn_acao/btn-delet';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import {
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
import { baseURL } from '../api/api';

export function Telefone() {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [telefone, setTelefone] = useState([])

    async function handleDelete(idTelefone) {
        try {
            await axios.delete(baseURL + 'telefone/' + `${idTelefone}`)
                .then(() => {
                    const novaLista = telefone.filter((telefones) => telefones.idTelefone !== idTelefone)
                    setTelefone(novaLista)
                })
        } catch (error) {
            console.error('ops, erro ao deletar ' + error);
        }
    }
    
    useEffect(() => {
        axios.get(baseURL + "telefone")
            .then((response) => {
                setTelefone(response.data)
            }).catch((error) => {
                console.error(error)
            })
    }, [])
    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = visitante.map((customer) => customer.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

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
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    margin: '0px 0px 10px 0'
                }}
            >
                <Link href='/cadastros/novo-telefone'>
                    <Button
                        color="primary"
                        variant="outlined"
                        type="submit"
                    >
                        <AddIcon />
                    </Button>
                </Link>
            </Box>
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
                                        checked={selectedCustomerIds.length === telefone.length}
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0
                                            && selectedCustomerIds.length < telefone.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell align='center'>
                                    DDD
                                </TableCell>
                                <TableCell align='center'>
                                    Número
                                </TableCell>
                                <TableCell >
                                    Ação
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {telefone.slice(0, limit).map((telefone) => (
                                <TableRow
                                    hover
                                    key={telefone.id}
                                    selected={selectedCustomerIds.indexOf(telefone.id) !== -1}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIds.indexOf(telefone.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, telefone.id)}
                                            value="true"
                                        />
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Typography
                                            color="textPrimary"
                                            variant="body1"
                                        >
                                            {telefone.DDD}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center'>
                                        {telefone.numeroTelefone}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            display: 'flex',
                                            gap: '5px'
                                        }}>
                                            
                                        <Link href="../telas_acao/veiculo/btn-edit">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                            >
                                                <EditIcon />
                                            </Button>
                                        </Link>
                                        <DeletarItem
                                            onDelete={() => handleDelete(telefone.idTelefone)}
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
                count={telefone.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}