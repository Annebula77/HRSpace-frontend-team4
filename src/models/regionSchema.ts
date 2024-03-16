import { z } from 'zod';

export const regionSchema = z.object({
  id: z.number().int(),
  name: z.string(),
});
export type RegionModel = z.infer<typeof regionSchema>;
