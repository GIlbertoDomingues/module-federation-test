import { grupoBoticarioTheme } from '@grupoboticario/flora';
import { FloraProvider } from '@grupoboticario/flora-react';

interface AppProps {
  standalone?: boolean;
}

function App({ standalone = false }: AppProps) {
  return (
    <FloraProvider theme={grupoBoticarioTheme}>
      <div>Olá mundo.</div>
      <div>{`standalone = ${standalone}`}</div>
    </FloraProvider>
  );
}

export default App;
