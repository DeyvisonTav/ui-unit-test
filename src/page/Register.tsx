import React, { useState, FormEvent } from "react";
import * as z from "zod";
import { ZodError } from "zod";
import { api } from "../lib/axios";
import {
  Button,
  ContainerRegister,
  Image,
  ImageContainer,
  Inputs,
  InputsContainer,
} from "./styles";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export function Register() {
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: "",
    password: "",
  });
  const [erro, setErro] = useState<string | null>(null);

  function resetInputs() {
    setUser({ name: "", email: "", password: "" });
  }

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateFields(user.email, user.password)) {
      return;
    }

    try {
      await api.post("/users", user);
      resetInputs();
      setErro(null);
    } catch (error) {
      setErro("Erro ao cadastrar usuário.");
    }
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, name: event.target.value }));
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, email: event.target.value }));
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, password: event.target.value }));
  }

  return (
    <ContainerRegister>
      <ImageContainer>
        <Image src="/background.png" alt="Imagem de escritorio" />
      </ImageContainer>
      <InputsContainer>
        <img src="/logo.png" alt="" />
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <Inputs
            autoComplete="off"
            type="text"
            value={user.name}
            onChange={handleNameChange}
          />
          <label>Email</label>
          <Inputs
            autoComplete="off"
            type="text"
            value={user.email}
            onChange={handleEmailChange}
          />
          <label>Senha</label>
          <Inputs
            autoComplete="off"
            type="password"
            value={user.password}
            onChange={handlePasswordChange}
          />

          <Button type="submit">registrar</Button>
        </form>
        {erro && <p>{erro}</p>}
      </InputsContainer>
    </ContainerRegister>
  );
}
