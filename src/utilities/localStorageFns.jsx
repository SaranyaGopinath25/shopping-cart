
export const setItemInLocalStorage = (name, data) => {
    localStorage?.setItem(name, JSON.stringify(data));
}

export const getItemFromLocalStorage = (name) => {
    console.log("Getting item from local storage :::: "+localStorage.key(name));
    return localStorage?.getItem(name);
}

export const getParsedItemFromLocalStorage = (name) => {
    return JSON.parse(localStorage?.getItem(name));
}

export const removeItemFromLocalStorage = (name) => {
    localStorage?.removeItem(name);
}