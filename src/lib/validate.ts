import * as z from "zod"
 
export const SignUpSchema = z.object({
  name:z.string().min(2,{message:'required'}),
  username: z.string().min(2,{message:'required'}),
  email:z.string(),
  password:z.string().min(8 , {message:'Password must be at least 8 characters long'}),

})