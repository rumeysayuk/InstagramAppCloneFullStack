const REQUIRED_ERROR = (value) => `${value} Alanı Zorunludur`
const EMAIL_UNIQUE_ERROR = (email) => `Girilen ${email} Email Adresi Sistemimizde Zaten Kayıtlı`;
const PLEASE_PROVIDE_EMAIL = "Geçersiz Email Adresi";
const MIN_LENGTH_ERROR = (value) =>`${value} alanı minimum 3 karakter olmalıdır.`

module.exports = {
    REQUIRED_ERROR,
    EMAIL_UNIQUE_ERROR,
    PLEASE_PROVIDE_EMAIL,
    MIN_LENGTH_ERROR,
}
