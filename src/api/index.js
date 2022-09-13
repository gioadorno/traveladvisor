import axios from 'axios';




export const getPlacesData = async (type, sw, ne) => {
    try {
        // Request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'b7562c3940msh6ac001f537f609fp1f3ef2jsn296c3a7f4d42',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data
    } catch (error) {
        console.log(error)
    }
}