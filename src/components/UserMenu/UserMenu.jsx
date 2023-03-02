import { Button } from "components/ContactForm/ContactForm.styled"
import { useAuth } from "hooks/useAuth"
import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/authOperations"
import { UserMenuWrap, UserName } from "./UserMenu.styled"

export const UserMenu = () => {
    const {user} = useAuth()
    const dispatch = useDispatch()

    const handleLogOut = () => dispatch(logOut())   
         
    return (
        <UserMenuWrap>
            <UserName>Welcome, <span>{user.name}</span></UserName>
            <Button onClick={handleLogOut}>Log Out</Button>
        </UserMenuWrap>
    )
}