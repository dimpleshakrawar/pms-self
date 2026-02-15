import Joi from "joi";

const signupSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  isGithubLogin: Joi.boolean(),
  isGoogleLogin: Joi.boolean(),

});

export default signupSchema;
