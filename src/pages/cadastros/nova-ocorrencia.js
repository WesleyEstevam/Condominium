import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../../components/painel-layout';

import { NovaOcorrencia } from '../../components/ocorrencias/cadastro-ocorrencia'

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Nova Ocorrência
        </Typography>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <NovaOcorrencia />
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
