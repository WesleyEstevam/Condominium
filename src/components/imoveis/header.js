import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import { Search as SearchIcon } from '../../icons/search';
  import { Upload as UploadIcon } from '../../icons/upload';
  import { Download as DownloadIcon } from '../../icons/download';
  import Link from 'next/link'
  import { Importar } from '../btn_acao/btn-importar';

  export const HeaderImoveis = (props) => (
    <Box {...props}>
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
            Imóveis
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
            onClick={Importar}
          >
            Importar
          </Button>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Exportar
          </Button>
          <Link href="cadastros/novo-imovel" color='primary'>
            <Button color='primary' variant='contained'>
              Novo Imóvel
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
              placeholder="Quadra"
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
              placeholder="Lote"
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
              placeholder="Bloco"
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
              placeholder="Apartamento"
              variant="outlined"
            />
          </Box>
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
  