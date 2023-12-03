import { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (pass) => {
          if (!pass?.length || pass.length < 5) {
            throw new Error("Password must be at least 5 characters");
          }
        },
      },
    },
    image: { type: String },
  },
  { timestamps: true }
);

// hash the user password after validation
UserSchema.post("validate", function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
