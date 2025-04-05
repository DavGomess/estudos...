import LinkButton from "../LinkButton"
import Title from '../Title'
import ProfileSection from "../ProfileSection"
import styles from './styles.module.css'


export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
    return(
        <div className={styles.container}>
            <img  src={avatar}/>
            <Title>
              <span>{name}</span>
           </Title>
            <ProfileSection>{bio}</ProfileSection>
            <ProfileSection>{phone}</ProfileSection>
            <ProfileSection>{email}</ProfileSection>
            <ProfileSection>
              <div className={styles.links}>
                <LinkButton href={githubUrl}>GitHub</LinkButton>
                <LinkButton href={linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={twitterUrl}>Twitter</LinkButton>
              </div>
            </ProfileSection>
        </div>
    )
}