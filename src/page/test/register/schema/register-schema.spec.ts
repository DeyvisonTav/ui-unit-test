import { describe, expect, it } from "vitest";
import { schema } from "../../../Register";

describe("schema", () => {
  it("accepts object with valid fields", () => {
    const validObj = { email: "teste@teste.com", password: "123456" };
    expect(() => schema.parse(validObj)).not.toThrow();
  });

  it("reject object with invalid fields", () => {
    const invalidObj = { email: "teste.com", password: "12345" };
    expect(() => schema.parse(invalidObj)).toThrowError();
  });
});

describe("Schema", () => {
  it("Should trigger error message for invalid email", () => {
    const invalidData = { email: "emailinválido", password: "123456" };
    expect(() => schema.parse(invalidData)).toThrow("E-mail inválido");
  });

  it("Should trigger error message for password with less than 6 characters", () => {
    const invalidData = { email: "teste@teste.com", password: "12345" };
    expect(() => schema.parse(invalidData)).toThrow(
      "Senha deve ter pelo menos 6 caracteres"
    );
  });
});
