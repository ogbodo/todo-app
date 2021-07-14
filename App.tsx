import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RecoilRoot } from 'recoil'
import AppNavigator from './navigation';

export default function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client} >
      <RecoilRoot>
        <AppNavigator />
      </RecoilRoot>
    </QueryClientProvider>
  );
}


