import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/painel-layout";
import { customers } from "../__mocks__/customers";
import { Despensas } from "../components/despensas/header";
import { ListaDespensas } from "../components/despensas/listagem-despensas";

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Despensas />
        <Box sx={{ mt: 3 }}>
          <ListaDespensas customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
