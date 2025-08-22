import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import authApi from "@/services/auth/api.ts";
import {LOCAL_STORAGE_KEY} from "@/lib/constants";

const GithubCallback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            authApi.githubLogin(code)
                .then((response) => {
                    if (response?.accessToken) {
                        localStorage.setItem(LOCAL_STORAGE_KEY.JWT_KEY, response.accessToken)
                        navigate("/")
                    } else {
                        console.error('No access token in response');
                        navigate("/login")
                    }
                })
                .catch((error) => {
                    console.error('GitHub login failed:', error);
                    navigate("/login")
                })
        } else {
            console.error('No code found in the URL');
            navigate("/login")
        }
    }, [navigate, searchParams]);
    return (
        <div>
            <h1>GitHub Callback Page</h1>
            <p>This is the GitHub callback page.</p>
        </div>
    )
}

export default GithubCallback