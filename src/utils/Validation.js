export const FormValidation = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  // if (!name || !name.trim()) {
  //   return "Please Enter Name"
  // }

  if (!isEmail) {
    return "Email is Not valid";
  }

  if (!isPassword) {
    return "Password is Not valid";
  }

  return null;
};
