export const setUserAction = (user) => {
    return {
        type: "SET_USER_INFO",
        payload: user,
    }
}

export const deleteUserAction = (user) => {
    return {
        type: "DELETE_USER",
        payload: user,
    }
}