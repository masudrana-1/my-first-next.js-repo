import { useRouter } from "next/router";

const ErrorPage = () => {


    const router = useRouter();

    setTimeout(()=> {
        router.push('/');
    },5000);

    return (
        <div>
            <img src="https://e7.pngegg.com/pngimages/759/927/png-clipart-web-development-http-404-world-wide-web-website-web-page-blue-cartoon-monster-cartoon-character-blue.png" alt="" width="100%" height="80%"/>
        </div>
    );
};

export default ErrorPage;