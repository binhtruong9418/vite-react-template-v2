import axiosClient from "@/lib/configs/api-client.ts";

const authApi = {
    login: async (email: string, password: string) => {
        return await axiosClient.post("/auth/login", { email, password });
    },

    googleLogin: async (tokenId: string): Promise<any> => {
        return await axiosClient.post("/auth/login/google", { tokenId });
    }
}

export default authApi;