import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const getFetch = async () => {
        setState({
            data: null,
            isLoading: true,
            error: null
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            error: null
        });
    }


    useEffect(() => {
        getFetch();

    }, [url])

    return {
        ...state,
        state
    };
}

