import axios from 'axios'
import accessRequest from './accessRequest'

const requestArtist = async () => {

    try {
        const artistResponse = await axios.get('https://api.spotify.com/v1/artists/1mYsTxnqsietFxj1OgoGbG?si=rMdENkuAR2KuH237Irxp3Q')
        const artistData = await artistResponse.data
        console.log(artistData)
    } catch (err) {
        if(err.response.status === 401) {
            accessRequest()
            requestArtist()
        } else {
            console.log(err)
        }
    }
}

export default requestArtist