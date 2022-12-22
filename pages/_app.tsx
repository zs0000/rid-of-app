import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Layout from '../components/Layout/Layout'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return (<QueryClientProvider client={queryClient}>
    <Layout>
    <Component {...pageProps} />
    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </Layout>
  </QueryClientProvider>)
}
