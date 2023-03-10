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
  import { Download as DownloadIcon } from '../../icons/download';

  export const HeaderLogs = (props) => (
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
            Entradas e Saídas
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
            variant='contained'
          >
            Exportar
          </Button>
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
              placeholder="Morador"
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
              placeholder="Veículo"
              variant="outlined"
            />
            <TextField
              fullWidth
              type="datetime-local"
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
              placeholder="Data/Hora"
              variant="outlined"
            />
          </Box>
        </CardContent>
        </Card>
      </Box>
    </Box>
  );
  