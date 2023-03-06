import { Box, Container } from '@mui/material';
import { AlocarDestino } from '../../../components/btn_acao/visitante/AlocarDestino';
import { DashboardLayout } from '../../../components/painel-layout';

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
          <AlocarDestino />
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