function validatePIN(pin) {
    if (/^\d{4}$/.test(pin) || /^\d{6}$/.test(pin)) {
        return true
    } else {
        return false
    }
}