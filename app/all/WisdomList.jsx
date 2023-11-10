import Link from "next/link"
import {getWisdoms} from "../../Services/GetWisdom"
import styles from "./WisdomList.module.css"

export default async function WisdomList() {
    const wisdoms = await getWisdoms()
    console.log("Wisdom:" + wisdoms)
  
    return (
    <>
    {wisdoms && wisdoms.map((wisdom) =>{
        //const{title, content, author}= wisdom.attributes
        const{id, attributes:{title, content, author}}= wisdom
        return(
        <div key={id} className={styles.card}>
          {title && <h3>{title}</h3>}
            <p dangerouslySetInnerHTML={{__html:content}} className={styles.content}/>
            <p className={styles.author}>{author}</p>
         
        </div>
        )
        }
    )}
    <button className="btn-primary">
    <Link href="/create">Create a new wisdom</Link></button>
    </>
    )}