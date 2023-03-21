import React, { useState } from "react";
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

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const schema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      schema.parse({ email, password });
      const parms = {
        name: name,
        email: email,
        password: password,
      };
      await api.post("/users", parms);
      alert("Foi registrado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        setErro(error.errors[0].message);
      } else {
        console.error(error);
        setErro("Ocorreu um erro inesperado.");
      }
    }
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
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Email</label>
          <Inputs
            autoComplete="off"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Senha</label>
          <Inputs
            autoComplete="off"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit">registrar</Button>
        </form>
        {erro && <p>{erro}</p>}
      </InputsContainer>
    </ContainerRegister>
  );
}
