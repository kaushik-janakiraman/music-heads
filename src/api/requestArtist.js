import axios from 'axios'

const requestArtist = async () => { 
    // https://open.spotify.com/artist/

    const artistResponse = await axios.get('https://api.spotify.com/v1/artists/1mYsTxnqsietFxj1OgoGbG?si=rMdENkuAR2KuH237Irxp3Q', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    const artistData = await artistResponse.data
    console.log(artistData)
    console.log((localStorage.getItem('token')).toLocaleString())
}

export default requestArtist