import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TemperatureIcon from './TemperatureIcon';
const queryClient = new QueryClient();

function App() {


  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <TemperatureIcon />
    </QueryClientProvider>
  )
}

export default App
