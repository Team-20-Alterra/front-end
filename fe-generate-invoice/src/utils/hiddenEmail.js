export const hiddenEmail = (email) => {
    return email.replace(/(\w{5})[\w.-]+@([\w.]+\w)/, "$1*********@$2")
} 
