import { z } from 'zod';

export const skillOrResponsibilitySchema = z.object({
  name: z.string(),
  id: z.number().int(),
});
export type SkillOrResponsibilityModel = z.infer<typeof skillOrResponsibilitySchema>;

export const singleCategorySchema = z.object({
  name: z.string().nullable(),
  id: z.number().int().nullable(),
  skills: z.array(skillOrResponsibilitySchema).nullable(),
  responsibilities: z.array(skillOrResponsibilitySchema).nullable(),
});

export type SingleCategoryModel = z.infer<typeof singleCategorySchema>;
