function validateUserName(userName: string): string | null{
	if (userName.length < 5) return "Minimum character must be 5"
	if (userName.length > 10) return "Exceeded maximum character length"
	return null
}

function validatePassword(password: string): string | null {
    if (password.length < 5) return "Minimum password length must be 5"
	return null
}

export { validatePassword, validateUserName }