import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({
  firstName: "Elijah",
  lastName: "Mwambazi",
  age: 100,
});

const root = document.getElementById("root");
const userForm = new UserForm(root, user);

userForm.render();
