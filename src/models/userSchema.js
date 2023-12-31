import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },

    email: { type: String, required: true, unique: true },
    password: {
      type: String,
    },
    image: { type: String },
  },
  { timestamps: true }
);
export const User = models?.User || model("User", UserSchema);
/*
// hash the user password before saving
UserSchema.pre("save", async function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }

  try {
    // generate a salt
    const salt = await bcrypt.genSalt(10);

    // hash the password along with the salt
    const hashedPassword = await bcrypt.hash(user.password, salt);

    // set the hashed password
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});
export const User = models?.User || model("User", UserSchema);

// // hash the user password after validation
// UserSchema.post("validate", function (user) {
//   const notHashedPassword = user.password;
//   const salt = bcrypt.genSaltSync(10);
//   user.password = bcrypt.hashSync(notHashedPassword, salt);
// });
*/
