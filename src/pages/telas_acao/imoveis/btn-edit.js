import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../../components/painel-layout';
import { customers } from '../../../__mocks__/customers';
import { EditImovel } from '../../../components/btn_acao/imoveis/btn-edit';

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
        <Box sx={{ mt: 3 }}>
          <EditImovel customers={customers} />
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
