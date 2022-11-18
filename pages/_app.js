import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
    >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
