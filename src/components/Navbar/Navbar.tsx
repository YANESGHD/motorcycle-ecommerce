import Image from 'next/image'
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Selector } from '../Selector';

export const Navbar: React.FC = () => {
  return (
    <AppBar position='static' color='primary' sx={{ padding: { xs: '0 10px', md: '0 70px' } }}>
      <Toolbar  sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image
          src="/simplimuv-logo.png"
          alt="Simplimuv Logo"
          width={150}
          height={30}
          priority
        />

        <Selector />

        <IconButton>
          <Menu color='secondary' sx={{ fontSize: '30px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
