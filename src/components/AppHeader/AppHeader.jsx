import { UserMenu } from "components/UserMenu/UserMenu"
import { useAuth } from "hooks/useAuth"
import { Header, Logo } from "./AppHeader.styled"

export const AppHeader = () => {
    const {isLoggedIn} = useAuth()
    return (
        <Header login={isLoggedIn}>
            <Logo login={isLoggedIn} to="/">Phonebook</Logo>
            {isLoggedIn && <UserMenu/>}
        </Header>
    )
}