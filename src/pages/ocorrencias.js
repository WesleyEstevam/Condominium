import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/painel-layout';
import { customers } from '../__mocks__/customers';
import { ListaOcorrencia } from '../components/ocorrencias/listagem-ocorrencia'
import { HeaderOcorrencias } from '../components/ocorrencias/header'
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
        <HeaderOcorrencias />
        <Box sx={{ mt: 3 }}>
          <ListaOcorrencia customers={customers} />
        </Box>
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
