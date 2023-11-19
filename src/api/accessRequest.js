import axios from 'axios'
import clientId from '../constants/clientId'
import clientSecret from '../constants/key'
import storeAccessToken from './storeAccessToken'

const accessRequest = async() => {
    try {
        const accessTokenResponse = await axios.post('https://accounts.spotify.com/api/token', {
                'grant_type': 'client_credentials',
                'client_id': clientId,
                'client_secret': clientSecret
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        const accessToken = await accessTokenResponse.data
        storeAccessToken(accessToken)
        // return accessToken
    } catch (err) {
        console.log(err)
    }
}

export default accessRequest