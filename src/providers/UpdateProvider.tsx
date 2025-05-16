import React, {type FC, useEffect} from "react";
import {useAuth} from "../lib/store/useAuth.ts";
import {useQueryClient} from "@tanstack/react-query";

type UpdateProviderProps = {
    children: React.ReactNode;
}

const UpdateProvider: FC<UpdateProviderProps> = ({ children }) => {
    const {user, fetchUser} = useAuth()
    const queryClient = useQueryClient();

    useEffect(() => {
        if (user) {
            queryClient.invalidateQueries()
        } else {
            fetchUser().then()
        }
    }, [fetchUser, queryClient, user]);

    return (
        <>
            {children}
        </>
    )
}

export default UpdateProvider;