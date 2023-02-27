import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Users as UsersIcon } from '../icons/users';
import { NavItem } from './nav-item';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HandymanIcon from '@mui/icons-material/Handyman';
import CampaignIcon from '@mui/icons-material/Campaign';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Painel'
  },
  {
    href: '/visitantes',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Visitantes'
  },
  {
    href: '/moradores',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Moradores'
  },
  {
    href: '/prestadores',
    icon: (<HandymanIcon fontSize="small" />),
    title: 'Prestadores'
  },
  {
    href: '/ocorrencias',
    icon: (<CampaignIcon fontSize="small" />),
    title: 'Ocorrências'
  },
  {
    href: '/cameras',
    icon: (<CameraAltIcon fontSize="small" />),
    title: 'Câmeras'
  },
  {
    href: '/logs',
    icon: (<SecurityIcon fontSize="small" />),
    title: 'Logs'
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <div sx={{ //Estilização da Scrollbar está apenas para o Firefox
      scrollbarWidth: 'thin',
      scrollbarColor: 'blue orange',
      '::-webkit-scrollbar-thumb:vertical': {
        width: '8px',
        backgroundColor:'#bfbfbf',
        borderTop:'1px solid #a4a4a4',
        borderBottom:'1px solid #a4a4a4'
      }
    }}>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ p: 3, marginBottom: -3, textAlign: 'center' }}>
            <NextLink
              href="/"
              passHref
            >
              <img 
              src='/static/logoCondominium.jpeg'
              style={{
                display: 'inline-block',
                width: 150,
                borderRadius: 100
              }}
              />
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1, paddingBottom: 30 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2
          }}
        >
          <Button
            color="success"
            variant="contained"
            component="a"
            endIcon={(<MeetingRoomIcon />)}
            fullWidth
            sx={{ mb: 2, mt: 1 }}
          >
            Abrir Portão
          </Button>
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Deseja deslogar do sistema?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Clique no botão sair.
          </Typography>
          <NextLink
            href="/login"
            passHref
          >
            <Button
              color="error"
              component="a"
              endIcon={(<OpenInNewIcon />)}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Sair
            </Button>
          </NextLink>
        </Box>
      </Box>

    </div>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
    
  }

  return (
      <Drawer
        anchor="left"
        onClose={onClose}
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
        variant="temporary"
      >
        {content}
      </Drawer>
    );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
