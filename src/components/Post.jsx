import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/111245491?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Stephani Engel</strong>
                        <span>Front-End Developer</span>
                    </div>
                </div>

                <time title="28 de Novembro às 17:11h" dateTime="2022-11-28 17:11:30">Públicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="https://github.com/StephaniEngell">github.com/StephaniEngell</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#dev</a>{' '}
                    <a href="#">#frontend</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            </div>
        </article>
    )
}