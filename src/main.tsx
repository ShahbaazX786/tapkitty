import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const gqlClient = new ApolloClient({
  uri: "http://localhost:4200",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient} >
      <App />
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://telegram.org/js/telegram-web-app.js"></script>` }} />
    </ApolloProvider>
  </React.StrictMode>,
)