import { Alert, Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import ErrorOutline from '@mui/icons-material/ErrorOutline';

export const Ocorrencias = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Ocorrências
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            500
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <ErrorOutline />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
