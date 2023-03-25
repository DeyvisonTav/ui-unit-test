import { expect, it, describe } from "vitest";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

function handleNameChange(
  event: React.ChangeEvent<HTMLInputElement>,
  user: UserProps
): UserProps {
  return { ...user, name: event.target.value };
}

function handleEmailChange(
  event: React.ChangeEvent<HTMLInputElement>,
  user: UserProps
): UserProps {
  return { ...user, email: event.target.value };
}

function handlePasswordChange(
  event: React.ChangeEvent<HTMLInputElement>,
  user: UserProps
): UserProps {
  return { ...user, password: event.target.value };
}

describe("UserProps functions", () => {
  const user: UserProps = {
    name: "John",
    email: "john@example.com",
    password: "password123",
  };

  it("should handle name change", () => {
    const event = {
      target: { value: "Jane" },
    } as React.ChangeEvent<HTMLInputElement>;
    const newUser = handleNameChange(event, user);
    expect(newUser).toEqual({ ...user, name: "Jane" });
  });

  it("should handle email change", () => {
    const event = {
      target: { value: "jane@example.com" },
    } as React.ChangeEvent<HTMLInputElement>;
    const newUser = handleEmailChange(event, user);
    expect(newUser).toEqual({ ...user, email: "jane@example.com" });
  });

  it("should handle password change", () => {
    const event = {
      target: { value: "newpassword123" },
    } as React.ChangeEvent<HTMLInputElement>;
    const newUser = handlePasswordChange(event, user);
    expect(newUser).toEqual({ ...user, password: "newpassword123" });
  });
});
