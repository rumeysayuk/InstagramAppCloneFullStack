const REQUIRED_ERROR=(value)=>`${value} alanı zorunludur` ;
const EMAIL_UNIQUE_ERROR=(value)=> `${value}  adresi sistemimizde kayıtlıdır`;
const INVALID_EMAIL="Email geçerli değil";
const MIN_LENGTH_ERROR=(value,minLength)=> `${value}  en az ${minLength} karakter olmalıdır`;
module.exports={
    REQUIRED_ERROR,EMAIL_UNIQUE_ERROR,INVALID_EMAIL,MIN_LENGTH_ERROR
}
