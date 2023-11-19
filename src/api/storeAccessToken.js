import requestArtist from "./requestArtist"

const storeAccessToken = (token) => {

    localStorage.setItem('token', token.access_token)
    requestArtist()
}

export default storeAccessToken