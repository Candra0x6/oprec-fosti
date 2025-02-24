import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(3, "username minimal 3 karakter").max(255),
  password: z.string().min(8, "password minimal 8 karakter").max(16),
});

export type AuthSchema = z.infer<typeof authSchema>;
