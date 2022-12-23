import Cookies from 'js-cookie'
const Auth = {
    storeUserInfoToCookie(token) {
        return Cookies.set("cookiename", token, { expires: 1 })
    },
    isLoggedIn() {
        if (Cookies.get("cookiename")) {
            return true;
        } else {
            return false;
        }
    },
    isLoggedOut() {
        return Cookies.remove("cookiename")
    }
}
export default Auth