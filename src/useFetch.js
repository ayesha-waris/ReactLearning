import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw Error("error in fetching");
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
                console.log(data);

            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);
    return { blogs, isLoading };
}
export default useFetch;