import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string().optional(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
