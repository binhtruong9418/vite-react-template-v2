import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {type FC, type ReactNode, useState} from "react";

type Props = {
    children: ReactNode;
};
const QueryProvider: FC<Props> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: false,
                    },
                },
            }),
    );


    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default QueryProvider;