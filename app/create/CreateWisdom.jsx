'use client'

import { useState } from "react"
import styles from "./CreateWisdom.module.css"
export default function CreateWisdom() {

const [title, setTitle]= useState('')
const [content, setContent]= useState('')
const [author, setAuthor]= useState('')
const [keywords, setKeywords]= useState('')
const [category, setCategory]= useState([])
const [loading, setIsLoading]= useState(false)
  return (
    <form className={styles.form}>
<label>
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

    <p>Kategorien</p>
    <div className={styles.checkboxContainer}>
        <div>
        <input type="checkbox" name="assumption" id="assumption" />
        <label htmlFor="assumption">Gesetz der Annahme</label>
        </div>
        <div>
        <input type="checkbox" name="love" id="love" />
        <label htmlFor="love">Liebe</label>
        </div>
        <div>
        <input type="checkbox" name="funny" id="funny" />
        <label htmlFor="funny">Lustiges</label>
        </div>
        <div>
        <input type="checkbox" name="courage" id="courage" />
        <label htmlFor="courage">Mut</label>
       </div>
       <div>
        <input type="checkbox" name="spiritual" id="spiritual" />
        <label htmlFor="spiritual">Spirituelles</label>
       </div>
       <div>
        <input type="checkbox" name="time" id="time" />
        <label htmlFor="time">Zeit</label>
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
    </form>
  )
}
