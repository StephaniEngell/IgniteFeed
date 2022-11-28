import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio pariatur explicabo reiciendis asperiores accusamus vel vero ducimus, sunt beatae perspiciatis facilis dolores, ex, unde at commodi vitae? Ipsum, maiores minus."
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor, sit amet consectet"
          />
        </main>
      </div>
    </div>
  )
}



