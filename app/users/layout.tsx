"use client"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import ApiCallsProvider from '@/providers/apiCallsProvider';  

const queryClient = new QueryClient()

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <QueryClientProvider client={queryClient}>
          <ApiCallsProvider>
              <main className="container mx-auto">
                  {children}
              </main>
            </ApiCallsProvider>
        </QueryClientProvider>
    );
  }
  