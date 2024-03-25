import { z } from 'zod';

export const forthPageSchema = z.object({
  recruiter_experience: z.string().nullable(),
  recruiter_job: z.array(z.string()).nullable(),
  type_resume: z.string().nullable(),
  additional_requirements: z.string().nullable(),
  isLegalEntity: z.boolean(),
  stoplist_companies: z.string().nullable(),
  stoplist_employee: z.string().nullable(),
  file_url: z.string().nullable(),
});

export type ForthPageModel = z.infer<typeof forthPageSchema>;
