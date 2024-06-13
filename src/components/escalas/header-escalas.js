import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Search as SearchIcon } from "../../icons/search";
import { Download as DownloadIcon } from "../../icons/download";
import { Importar } from "../btn_acao/btn-importar";

export const HeaderEscalas = (props) => (
  <Box>
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        m: -1,
      }}
    >
      <Typography sx={{ m: 1 }} variant="h4">
        Escalas
      </Typography>
      <Box sx={{ m: 1, display: "flex" }}>
        <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
          Compartilhar
        </Button>
        <Link href="/cadastros/nova-escala" color="primary">
          <Button color="primary" variant="contained">
            Nova Escala
          </Button>
        </Link>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 1000, display: "flex", alignContent: "center" }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Data da escala"
              type="date"
              variant="outlined"
            />
            <Button
              sx={{
                display: "flex",
                justifyContent: "space-around",
                margin: "0px 10px",
              }}
              color="success"
              variant="contained"
            >
              Pesquisar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
