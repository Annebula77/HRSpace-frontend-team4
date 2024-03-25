import { z } from "zod";

export const fileSchema = z.object({
  // NOTE: nullble потому что работали с моковым сервером
  file_url: z.string().nullable(),
});

export type FileModel = z.infer<typeof fileSchema>;
