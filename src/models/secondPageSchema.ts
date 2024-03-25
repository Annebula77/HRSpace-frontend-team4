import { z } from "zod";

export const secondPageSchema = z.object({
  work_place: z.string().nullable(),
  work_format: z.string().nullable(),
  employment_type: z.string().nullable(),
  employee_registration: z.string().nullable(),
  availability_DMS: z.boolean().nullable(),
  compensation: z.array(z.string()).nullable(),
  driver_license: z.boolean().nullable(),
  having_car: z.boolean().nullable(),
  company_descriptions: z.string().nullable(),
});

export type FirstPageModel = z.infer<typeof secondPageSchema>;
