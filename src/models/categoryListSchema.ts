import { z } from 'zod';

export const categoryInListSchema = z.object({
  id: z.string(),
  name: z.string(),
});
export type CategoryInListModel = z.infer<typeof categoryInListSchema>;
