import Profile from './components/Profile'
import imgPeople from '../src/assets/people.webp'

export default function App() {
    return(
        <div className='App'>
            <Profile avatar={imgPeople} name={'John Doe'} bio={'Full-Stack javascript developer at Acme inc.'} phone={'+5511987654321'} email={'john.doe@gmail.com'} githubUrl={'https://github.com/facebook'} linkedinUrl={' https://www.linkedin.com/company/meta'} twitterUrl={'https://twitter.com/Meta'}/>

        </div>
    )
}