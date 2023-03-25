import { describe, it, expect } from "vitest";
import { schema } from "../../../Register";
import { ZodError } from "zod";


function validateFields(email: string, password: string) {
  try {
    schema.parse({ email, password });
    return true;
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return false;
    }
    throw error;
  }
}

describe("validateFields", () => {
  it("returns true for valid fields", () => {
    expect(validateFields("teste@teste.com", "123456")).toBe(true);
  });

  it("returns false for invalid fields", () => {
    expect(validateFields("teste.com", "12345")).toBe(false);
  });
});
