import { z } from 'zod';

const userSchema = z.object({
    _id: z.any(),
    email: z.string().email(),
    password: z.string()
})

type userType = z.infer<typeof userSchema> 

export {userSchema}
export type {userType}