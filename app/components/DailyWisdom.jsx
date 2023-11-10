import styles from "../all/WisdomList.module.css"
import {getWisdoms} from "../../Services/GetWisdom"

async function getDailyWisdom() {
    try{
        const res = await fetch('http://127.0.0.1:1337/api/wisdom-of-the-days');     
        const {data} =await res.json()
        return data
    }catch(error){
        console.error(error)
    }
  }
    
export default async function DailyWisdom() {
    
    let date = new Date().toISOString().split('T')[0]
    const dailyWisdoms= await getDailyWisdom()
    const dayExists = dailyWisdoms.find((dailyWisdom) => (dailyWisdom.attributes.date === date))
    console.log(dayExists)
        if(!dayExists){
            const wisdoms = await getWisdoms()
            const randomIndex = Math.floor(Math.random() * wisdoms.length)
            const randomWisdom = wisdoms[randomIndex]
    
            const{id, attributes:{title, content, author}}= randomWisdom
            console.log('Attribute' + id, title, content, author)
            /* return randomWisdom
        } */
            return(
            <>
           
       <div className={styles.card}>
        
          {title && <h3>{title}</h3>}
            <p dangerouslySetInnerHTML={{__html:content}}  />
            <p className={styles.author}>{author}</p>
         
        </div>
        </>
        )
    }}
       

