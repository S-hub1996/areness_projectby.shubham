
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(

  <Provider store={store}>
  <ChakraProvider>
    <App />
  </ChakraProvider>
</Provider>,

)