import styles from './styles.module.css'


export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
    return(
        <div className={styles.container}>
            <img  src={avatar}/>
            <h2>{name}</h2>
            <hr />
            <p>{bio}</p>
            <hr />
            <p>{phone}</p>
            <hr />
            <p>{email}</p>
            <hr />
            <button><a href={githubUrl} target="_blank">GitHub</a></button>
            <button><a href={linkedinUrl} target="_blank">Linkedin</a></button>
            <button><a href={twitterUrl} target="_blank">Twitter</a></button>
        </div>
    )
}