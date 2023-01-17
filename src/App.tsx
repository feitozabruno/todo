import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </div>
  )
}