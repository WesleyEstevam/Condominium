import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ImageList from "@mui/material/ImageList";
import { getInitials } from '../../utils/get-initials';
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

export function Telefone() {
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);
    const [visitante, setVisitante] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/visitante")
            .then((response) => {
                setVisitante(response.data)
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
                <Link href='/visitantes'>
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
                                        checked={selectedCustomerIds.length === visitante.length}
                                        color="primary"
                                        indeterminate={
                                            selectedCustomerIds.length > 0
                                            && selectedCustomerIds.length < visitante.length
                                        }
                                        onChange={handleSelectAll}
                                    />
                                </TableCell>
                                <TableCell>
                                    DDD
                                </TableCell>
                                <TableCell>
                                    Número
                                </TableCell>
                                <TableCell>
                                    Ação
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visitante.slice(0, limit).map((visitante) => (
                                <TableRow
                                    hover
                                    key={visitante.id}
                                    selected={selectedCustomerIds.indexOf(visitante.id) !== -1}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedCustomerIds.indexOf(visitante.id) !== -1}
                                            onChange={(event) => handleSelectOne(event, visitante.id)}
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

                                            {getInitials(customer.name)}

                                            <Typography
                                                color="textPrimary"
                                                variant="body1"
                                            >
                                                {customer.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {customer.phone}
                                    </TableCell>
                                    <TableCell>
                                        {` ${customer.phone}`}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            display: 'flex',
                                            gap: '5px'
                                        }}>
                                        <Link href="../telas_acao/veiculo/btn-info">
                                            <Button
                                                color="success"
                                                variant="contained"
                                            >
                                                <InfoIcon />
                                            </Button>
                                        </Link>
                                        <Link href="../telas_acao/veiculo/btn-edit">
                                            <Button
                                                color="primary"
                                                variant="contained"
                                            >
                                                <EditIcon />
                                            </Button>
                                        </Link>
                                        <Button
                                            color="error"
                                            variant="contained"
                                            onClick={DeletarItem}
                                        >
                                            <DeleteForeverIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </ImageList>
            <TablePagination
                component="div"
                count={visitante.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    )
}