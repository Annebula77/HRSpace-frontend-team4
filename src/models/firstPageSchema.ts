import { z } from 'zod';

export const firstPageSchema = z.object({
  job_title: z.string().nullable(),
  specialization: z.string().nullable(),
  skills: z.array(z.string()).nullable(),
  responsibilities: z.array(z.string()).nullable(),
  min_salary: z.number().int().nullable(),
  max_salary: z.number().int().nullable(),
  hide_salary: z.boolean().nullable(),
  experience: z.string().nullable(),
  education: z.array(z.string()).nullable(),
  business_trips: z.boolean().nullable(),
});

export type FirstPageModel = z.infer<typeof firstPageSchema>;
