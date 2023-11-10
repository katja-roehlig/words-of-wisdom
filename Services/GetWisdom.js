
export async function getWisdoms() {
    try{
        const res = await fetch('http://127.0.0.1:1337/api/quotes',{
              next:{revalidate:60*60*24 }})
              
        const {data} =await res.json()
        return data
    }catch(error){
        console.error(error)
    }
  }