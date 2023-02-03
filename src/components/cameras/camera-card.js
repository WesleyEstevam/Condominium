import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%'
    }
  }
  {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3,
        }}
      >
      <img 
          src='https://www.gifsengracados.com.br/wp-content/uploads/2010/12/estacionando-carro-fail.gif'
          style={{
            width: 600
          }}
        />
      </Box>

      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        Portaria Principal
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Agora
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
