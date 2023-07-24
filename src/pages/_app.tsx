import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Layout } from '@/components';
import { theme } from '@/styles';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
