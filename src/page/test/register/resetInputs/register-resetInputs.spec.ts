import { beforeEach, describe, expect, it } from "vitest";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

let user: UserProps = {
  name: "",
  email: "",
  password: "",
};

function resetInputs() {
  user = { name: "", email: "", password: "" };
}

describe("resetInputs() should reset user fields", () => {
  beforeEach(() => {
    user = { name: "teste", email: "teste@teste.com", password: "123456" };
    resetInputs();
  });

  it("should reset user fields", () => {
    expect(user).toEqual({
      name: "",
      email: "",
      password: "",
    });
  });
});
