import DailyWisdom from './components/DailyWisdom'
import styles from './page.module.css'

export default function Home() {
  const dateFormat = Intl.DateTimeFormat('de', {dateStyle: 'full'});
    const today = dateFormat.format(Date.now())
  return (
    <main className={styles.main}>

       <h2>Daily Wisdom</h2>
        <p>{today}</p>
     <DailyWisdom />
    </main>
  )
}
