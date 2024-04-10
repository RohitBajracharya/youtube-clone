export const API_KEY = 'AIzaSyCIC_oijygkYE9Mot8B412pVpRWmFk0u_M'

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K"
    } else {
        return value
    }
}