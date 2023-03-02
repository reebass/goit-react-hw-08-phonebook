import { AuthLink, WelcomeText } from "./Home.styled"

export const Home = () => {
    return (
        <>
        <WelcomeText>Welcome to the Phonebook. Please log in.</WelcomeText>
        <AuthLink to="authentication/login">Login</AuthLink>
        </>
    )
}