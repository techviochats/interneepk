export function validatePassword(str: string) {
  const hasFiveChars = /.{5,}/.test(str);
  const hasThreeNumbers = /(.*[0-9]){3,}/.test(str);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(str);
  const hasNoSpaces = !/\s/.test(str);
  return hasFiveChars && hasThreeNumbers && hasSpecialChar && hasNoSpaces;
}
