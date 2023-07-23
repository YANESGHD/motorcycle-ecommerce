import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Selector } from '../Selector';

export const Navbar: React.FC = () => {
  return (
    <AppBar position='static' sx={{ bgcolor: '#FFFFFF', padding: { xs: '0', md: '0 70px' } }}>
      <Toolbar  sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href={'/motorcycles'}>
          <Image
            src="/simplimuv-logo.png"
            alt="Simplimuv Logo"
            width={80}
            height={20}
          />
        </Link>

        <Selector />

        <IconButton>
          <ShoppingBagOutlined color='secondary' sx={{ fontSize: '30px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
