import { ThemeProvider, createTheme } from '@mui/material';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { ProductGrid } from './components/ProductGrid';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BCD4',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <FilterBar />
        <ProductGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;
