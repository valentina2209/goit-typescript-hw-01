type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<Users>) {
  console.log("Updating user with:", initialValues);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});





