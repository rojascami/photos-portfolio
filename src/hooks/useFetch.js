
import { useEffect, useState } from "react"

export function useFetch (url) {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [ error, setError] = useState(null)

useEffect(() => {
    const abortController = new AbortController()
    setLoading(true)
    fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    return () => abortController.abort( )
}, [])
    return { data, loading, error}
}