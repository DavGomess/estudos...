import LinkButton from "../LinkButton"
import Title from '../Title'
import ProfileSection from "../ProfileSection"
import styles from './styles.module.css'


export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
  function handleClick(ev) {
    console.log(ev)
    alert("Você agora está seguindo!")
  }
  return(
        <div className={styles.container}>
            <img  src={avatar}/>
            <Title>
              <span>{name}</span>
              <button className={styles.followButton} onClick={handleClick}>Follow</button>
           </Title>
            <ProfileSection>{bio}</ProfileSection>
            <ProfileSection>{phone}</ProfileSection>
            <ProfileSection>{email}</ProfileSection>
            <ProfileSection
              className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
              >
                <LinkButton href={githubUrl}>GitHub</LinkButton>
                <LinkButton href={linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}