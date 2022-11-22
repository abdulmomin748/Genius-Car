// import { useLocation } from "react-router-dom";


export const setAuthToken = user => {
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const currentUSer = {
        email: user.email
    }
    // 2.  get jwt token   --> kintu age patachhi(post) tarpor data send korteche amader
    fetch('https://genius-car-server-five-ebon.vercel.app/jwt', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(currentUSer)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // local storage is the easiest but not the best place to store 

        // 5 store token in localstorage
        localStorage.setItem('genius-token', data.token)

        // 6
        // navigate(from, {replace: true});
    })
}