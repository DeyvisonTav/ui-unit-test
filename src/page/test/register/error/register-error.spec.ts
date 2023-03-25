import { describe, it, expect } from "vitest";
import { ZodError } from "zod";
import { schema } from "../../../Register";

function validateFields(email: string, password: string, setError: (error: string) => void) {
  try {
    schema.parse({ email, password });
    return true;
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      setError(error.message);
      return false;
    }
    throw error;
  }
}

describe("erro", () => {
  it("is updated with error message for invalid fields", () => {
    let erro: string | null = null;
    validateFields("teste.com", "12345", (error) => {
      erro = error;
    });
    expect(erro).not.toBeNull();
    expect(typeof erro).toBe("string");
  });
});
