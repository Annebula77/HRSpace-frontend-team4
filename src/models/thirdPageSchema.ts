import { z } from "zod";

export const thirdPageSchema = z.object({
  number_employees: z.number().nullable(),
  start_search: z.string().nullable(),
  end_search: z.string().nullable(),
  number_recruits: z.number().nullable(),
  payment_model: z.string().nullable(),
  reward: z.number().nullable(),
});

export type ThirdPageModel = z.infer<typeof thirdPageSchema>;
