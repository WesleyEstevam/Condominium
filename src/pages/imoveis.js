import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/painel-layout';
import { customers } from '../__mocks__/customers';
import { HeaderImoveis } from '../components/imoveis/header';
import { ListaImoveis } from '../components/imoveis/listagem-imoveis';

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
        <HeaderImoveis />
        <Box sx={{ mt: 3 }}>
          <ListaImoveis customers={customers} />
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
