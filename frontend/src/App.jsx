import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import Footer from './components/other/footer';
import './app.css'



// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';


// import Navbar from './components/other/navbar';


// const httpLink = createHttpLink({
//   uri: '/graphql', // Ensure this URL matches your server's URL
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {

  return (
    // <ApolloProvider client={client}>
    <>

      <Outlet />


    </>

    // </ApolloProvider>
  );
}

export default App;
