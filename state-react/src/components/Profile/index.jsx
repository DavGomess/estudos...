import LinkButton from "../LinkButton"
import Title from '../Title'
import ProfileSection from "../ProfileSection"
import styles from './styles.module.css'
import { useState } from "react"

export default function Profile({avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl}) {
  const [followText, setFollowText] = useState("Follow")

  function handleClick() {
    alert("Você agora está seguindo!")
    setFollowText("Following")
  }

  return(
        <div className={styles.container}>
            <img  src={avatar}/>
            <Title>
              <span>{name}</span>
              <button className={styles.followButton} onClick={handleClick}>{followText}</button>
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