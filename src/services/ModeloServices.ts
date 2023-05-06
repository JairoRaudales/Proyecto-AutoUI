import React, { useState, useEffect } from "react";
import axios from "axios";

export interface ModeloType {
    id: number;
    descripcion: string;
  }
  
  const URI = "http://localhost:8080";
  
  export async function getModelo(): Promise<ModeloType[]> {
    const response = await axios.get<ModeloType[]>(`${URI}/api/modelo`);
    return response.data;
  }
  
  export async function addModelo(modelo: string): Promise<ModeloType> {
    const response = await axios.post<ModeloType>(
      `${URI}/api/modelo`, {
      descripcion: modelo,
    });
    return response.data;
  }
  
  export async function deleteModelo(id: number): Promise<void> {
    await axios.delete<void>(
      `${URI}/api/modelo/${id}`);
  }
  
  export async function updateModelo(modelo: ModeloType): Promise<ModeloType> {
      const response = await axios.put<ModeloType>(
        `${URI}/api/modelo/${modelo.id}`, {
        descripcion: modelo.descripcion,
      });
      return response.data;
    }