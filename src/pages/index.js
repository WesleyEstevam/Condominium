import { Box, Container, Grid } from '@mui/material';
import { Imoveis } from '../components/painel/imoveis';
import { Grafico } from '../components/painel/grafico';
import { Condominio } from '../components/painel/condominio';
import { TotalMoradores } from '../components/painel/total-moradores';
import { Ocorrencias } from '../components/painel/ocorrencias';
import { CameraPortariaPrincipal } from '../components/painel/camera-portaria-pricipal';
import { DashboardLayout } from '../components/painel-layout';

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Imoveis />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalMoradores />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Condominio />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Ocorrencias sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Grafico />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <CameraPortariaPrincipal sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
