import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import Link  from 'next/link';
import { Search as SearchIcon } from '../../icons/search';
import { Download as DownloadIcon } from '../../icons/download';
import { Importar } from '../btn_acao/btn-importar';
import { updateListagem } from '../../components/visitantes/listagem-visitantes'

export const CustomerListToolbar = (props) => (

  <Box>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Visitantes
      </Typography>
      <Box sx={{ m: 1, display: 'flex'}}>
          <Importar onUpdateListagem={updateListagem} />
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Exportar
        </Button>
          <Link href="cadastros/novo-visitante" color='primary'>
            <Button color='primary' variant='contained'>
                      
              Novo Visitante
            </Button>
          </Link>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 1000, display: 'flex', alignContent: 'center' }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Nome"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                display: 'flex',
                justifyContent:'space-around',
                margin: '0px 10px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Documento"
              variant="outlined"
            />
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Placa do veículo"
              variant="outlined"
            />
            <TextField
              fullWidth
              sx={{
                display: 'flex',
                justifyContent:'space-around',
                margin: '0px 10px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Telefone"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
