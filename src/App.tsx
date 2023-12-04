import '@mantine/carousel/styles.css';
import { Title } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import { theme } from './mantineTheme';
import StartPage from './pages/StartPage';

function App() {
  if (!theme.colors || !theme.colors.primary) {
    return <div>Error: Theme colors are not defined!</div>;
  }

  return (
    <div style={{ backgroundColor: theme.colors.primary[0], color: '#fff' }} className='App'>
      {theme.colors.secondary && (
        <>
          <h1 style={{ color: theme.colors.secondary[0] }}>Netflix 2.0</h1>
          <Title style={{ color: theme.colors.secondary[0] }}>HYPE IN THE CHAT</Title>
        </>
      )}

      <StartPage />
    </div>
  );
}

export default App;
