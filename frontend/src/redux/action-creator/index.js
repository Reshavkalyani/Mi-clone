export const changeuser = (name) => {
    return {
            type : "not",
            payload : name
    }
}
export const changetonull = () => {
    return {
            type : "is",
            payload : null
        }
}

