export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email không được để trống';
  }
  if (!re.test(email)) {
    return 'Email không đúng định dạng';
  }

  return '';
};
export const passwordValidator = password => {
  const re = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  if (!password || password.length <= 0) {
    return 'Mật khẩu không được để trống';
  }
  if (!re.test(password)) {
    return 'Mật khẩu không đúng định dạng';
  }
};

export default {
  emailValidator,
  passwordValidator,
};
