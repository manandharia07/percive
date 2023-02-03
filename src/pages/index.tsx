import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position='static'>
                <Toolbar>
                  <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    News
                  </Typography>
                  <Button color='inherit'>Login</Button>
                </Toolbar>
              </AppBar>
            </Box>
          </div>
        </section>
      </main>
    </Layout>
  );
}
