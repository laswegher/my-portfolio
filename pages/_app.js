import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Navbar from '../Components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
    >
      <Component {...pageProps} />
      <Navbar />
    </ThemeProvider>
  );
}

export default MyApp;
