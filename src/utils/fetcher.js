export const fetcher = (asyncFunction, params) => {
    return () => asyncFunction(params)
}