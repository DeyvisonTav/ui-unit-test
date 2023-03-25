import { act } from "@testing-library/react";
import { FormEvent } from "react";
import { expect, it, describe, vi, beforeEach } from "vitest";
import { api } from "../../../../lib/axios";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

async function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  user: UserProps,
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
) {
  event.preventDefault();
  try {
    await api.post("/users", user);
  } catch (error) {
    throw error;
  }
}

vi.mock("../../../../lib/axios");

describe("handleSubmit", () => {
  const mockPreventDefault = vi.fn();
  const mockSetUser = vi.fn();
  const mockUser: UserProps = {
    name: "John",
    email: "john@example.com",
    password: "password123",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should call api.post with user data", async () => {
    const mockEvent = {
      preventDefault: mockPreventDefault,
      target: {
        elements: {
          name: { value: mockUser.name },
          email: { value: mockUser.email },
          password: { value: mockUser.password },
        },
      },
    } as unknown as FormEvent<HTMLFormElement>;

    await act(async () => {
      await handleSubmit(mockEvent, mockUser, mockSetUser);
    });

    expect(api.post).toHaveBeenCalledWith("/users", mockUser);
  });

  it("should call preventDefault", async () => {
    const mockEvent = {
      preventDefault: mockPreventDefault,
      target: {
        elements: {
          name: { value: mockUser.name },
          email: { value: mockUser.email },
          password: { value: mockUser.password },
        },
      },
    } as unknown as FormEvent<HTMLFormElement>;

    await act(async () => {
      await handleSubmit(mockEvent, mockUser, mockSetUser);
    });

    expect(mockPreventDefault).toHaveBeenCalled();
  });
});
