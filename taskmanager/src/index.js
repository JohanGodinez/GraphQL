import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import 'antd/dist/antd.css';

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const App = (
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>
)

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
