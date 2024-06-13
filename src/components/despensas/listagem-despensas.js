import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import ImageList from "@mui/material/ImageList";
import axios from "axios";
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
  Typography,
} from "@mui/material";
import { DeletarItem } from "../btn_acao/btn-delet";
import { useRouter } from "next/router";
import { baseURL } from "../api/api";

export const ListaDespensas = () => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [despensa, setDespensa] = useState([]);
  const router = useRouter();

  // LISTAGEM DE despensa POR ID
  async function handleFindOne(tipoPessoa) {
    try {
      router.push(
        `/telas_acao/despensa/btn-info?data=${JSON.stringify(
          tipoPessoa.idPessoa
        )}`
      );
    } catch (error) {
      console.error("ops, erro ao listar id " + error);
    }
  }

  // LISTAGEM DE despensa
  useEffect(() => {
    axios
      .get(baseURL + "coroinhas")
      .then((response) => {
        setDespensa(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = despensa.map((despensa) => despensa.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = despensa;

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
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
          gridAutoColumns: "minmax(160px, 1fr)",
        }}
      >
        <Box sx={{ minWidth: "100%" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell>Altura</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {despensa.slice(0, limit).map((despensa) => (
                <TableRow
                  hover
                  key={despensa.id}
                  selected={selectedCustomerIds.indexOf(despensa.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {despensa.nome_coroinha}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{despensa.sexo_coroinha}</TableCell>
                  <TableCell>{despensa.altura_coroinha}</TableCell>
                  <TableCell>{despensa.tipo_coroinha}</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      gap: "5px",
                    }}
                  >
                    <Button
                      color="success"
                      variant="contained"
                      onClick={() => handleFindOne(despensa)}
                    >
                      <InfoIcon />
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
        count={despensa.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};
