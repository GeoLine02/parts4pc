import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().nonempty("First name is required"),
    lastName: z.string().nonempty("Last name is required"),
    email: z
      .string()
      .email("Incorrect email") // custom message
      .nonempty("Email is required"),
    phone: z.string().nonempty("Phone is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/\d/, "Password must include at least one number"),
    repeatPassword: z.string().nonempty("Please confirm your password"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords do not match",
    path: ["repeatPassword"], // assigns the error to repeatPassword field
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Incorrect email") // custom message
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/\d/, "Password must include at least one number"),
});
