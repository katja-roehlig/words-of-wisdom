'use client'

import { useState } from "react"
import styles from "./CreateWisdom.module.css"



export default function CreateWisdom() {

const [title, setTitle]= useState('')
const [content, setContent]= useState('')
const [author, setAuthor]= useState('')
const [keywords, setKeywords]= useState('')
const [category, setCategory]= useState([])

const [isLoading, setIsLoading]= useState(false)


const handleCreate = async(e) => {
    e.preventDefault();
    setIsLoading(true)
    const wisdom = {data: {title, content, author, keywords, publishedAt: null, categories: category}}
    const res = await fetch('http://127.0.0.1:1337/api/quotes',{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(wisdom)
    })
    if(res.status === 200){
        alert('Deine Weisheit wurde gespeichert')
        resetState()
        setIsLoading(false)
    }
}


const handleCategory=(e) => {
   
    if(e.target.checked){
        setCategory([...category, +e.target.id])
    }
    else{
        setCategory(category.filter((item) => item !== +e.target.id))
   }
}


const resetState = () => {
    setTitle('')
    setContent('')
    setAuthor('')
    setKeywords('')
    setCategory([])
    document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false )
}  



  return (
    <form className={styles.form} onSubmit={handleCreate}>
<label className="styles.label">
    <p>Titel</p>
    <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} className={styles.text}/>
</label>
<label>
    <p>Weisheit</p>
    <textarea  required onChange={(e)=> setContent(e.target.value)} value={content} className={styles.textarea}/>
</label>
<label>
    <p>Autor</p>
    <input type="text"  required onChange={(e)=> setAuthor(e.target.value)} value={author} className={styles.text}/>
</label>
<label>
    <p>Schlüsselwörter</p>
    <input type="text"  onChange={(e)=> setKeywords(e.target.value)} value={keywords} className={styles.text}/>
</label>

   
    <div className={styles.checkboxContainer}>
    <p className={styles.categories}>Kategorien</p>
        <div>
        <input type="checkbox" name="assumption" id="1" onChange={(e) => handleCategory(e)} />
        <label htmlFor="1">Gesetz der Annahme</label>
        </div>
        <div>
        <input type="checkbox" name="love" id="2" onChange={(e) => handleCategory(e)} />
        <label htmlFor="2">Liebe</label>
        </div>
        <div>
        <input type="checkbox" name="funny" id="3" onChange={(e) => handleCategory(e)} />
        <label htmlFor="3">Lustiges</label>
        </div>
        <div>
        <input type="checkbox" name="courage" id="4" onChange={(e) => handleCategory(e)} />
        <label htmlFor="4">Mut</label>
       </div>
       <div>
        <input type="checkbox" name="spiritual" id="5" onChange={(e) => handleCategory(e)}/>
        <label htmlFor="5">Spirituelles</label>
       </div>
       <div>
        <input type="checkbox" name="time" id="6" onChange={(e) => handleCategory(e)}/>
        <label htmlFor="6">Zeit</label>
       </div>
       <div>
        <input type="checkbox" name="other" id="7" onChange={(e) => handleCategory(e)}/>
        <label htmlFor="7">Sonstiges</label>
       </div>
    {/* <label className={styles.label}>Gesetz der Annahme</label>
    <input className={styles.checkbox} type="checkbox" value="Gesetz der Annahme" onChange={(e)=>{category.push(e.target.value)} }/> 
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Liebe" onChange={(e)=>{category.push(e.target.value)} }/> Liebe</label>
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Lustiges" onChange={(e)=>{category.push(e.target.value)} }/> Lustiges</label>
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Mut" onChange={(e)=>{category.push(e.target.value)} }/> Mut</label>
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Spirituelles" onChange={(e)=>{category.push(e.target.value)} }/> Spirituelles</label>
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Zeit" onChange={(e)=>{category.push(e.target.value)} }/> Zeit</label>
    <label className={styles.label}><input className={styles.checkbox} type="checkbox" value="Sonstiges" onChange={(e)=>{category.push(e.target.value)} }/> Sonstiges</label> */}
    </div> 

    <button className={styles.btnCreate} disabled={isLoading}>Erstellen</button>
    </form>
  )
}
