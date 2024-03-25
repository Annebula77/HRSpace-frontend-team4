import { z } from "zod";

export const citySchema = z.object({
  id: z.number().int(),
  name: z.string(),
});
export type CityModel = z.infer<typeof citySchema>;
