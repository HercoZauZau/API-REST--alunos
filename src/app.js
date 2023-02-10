import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";

import express from "express";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

/*
// Caso você queira limitar os endereços que possam ter acesso a sua API, use o seguinte trecho:

import cors from 'cors';

// Lista de todos endereços que podem acessar a API

const whiteList = [
  'http://localhost:3001', // exemplo
];


const corsOptions = {
  origin(origin, callback) {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
  },
};
  
*/

export default new App().app;
