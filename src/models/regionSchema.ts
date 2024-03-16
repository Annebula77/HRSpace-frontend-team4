import { z } from 'zod';

export const regionSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export type RegionModel = z.infer<typeof regionSchema>;
