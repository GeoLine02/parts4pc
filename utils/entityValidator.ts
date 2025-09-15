import { ZodSchema } from "zod";

export interface ValidationResult<T> {
  isValid: boolean;
  data?: T;
  errors?: string[];
}

export const entityValidator = async <T>(
  schema: ZodSchema<T>,
  entities: unknown
): Promise<ValidationResult<T>> => {
  try {
    const data = schema.parse(entities);
    return { isValid: true, data };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.name === "ZodError") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errors = err.errors.map((e: any) => e.message);
      return { isValid: false, errors };
    }
    return { isValid: false, errors: [err.message || "Unknown error"] };
  }
};
