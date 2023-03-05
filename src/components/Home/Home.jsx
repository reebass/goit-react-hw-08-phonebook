import { AuthLink, ButtonWrap, WelcomeText } from "./Home.styled"

export const Home = () => {
    return (
        <>
        <WelcomeText><span>Welcome to the Phonebook.</span> Please register or use an existing account to login.</WelcomeText>
        <ButtonWrap>
        <AuthLink active to="authentication/register">Register</AuthLink>
        <AuthLink to="authentication/login">Login</AuthLink>
        </ButtonWrap>
        </>
    )
}