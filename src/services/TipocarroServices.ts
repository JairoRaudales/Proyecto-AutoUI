import React, { useState, useEffect } from "react";
import axios from "axios";

export interface TipocarroType {
    id: number;
    descripcion: string;
  }
  
  const URI = "http://localhost:8080";
  
  export async function getTipo(): Promise<TipocarroType[]> {
    const response = await axios.get<TipocarroType[]>(`${URI}/api/colores`);
    return response.data;
  }
  
  export async function addTipo(tipo: string): Promise<TipocarroType> {
    const response = await axios.post<TipocarroType>(
      `${URI}/api/tipo_autos`, {
      descripcion: tipo,
    });
    return response.data;
  }
  
  export async function deleteTipo(id: number): Promise<void> {
    await axios.delete<void>(
      `${URI}/api/Tipo_autos/${id}`);
  }
  
  export async function updateTipo(tipo: TipocarroType): Promise<TipocarroType> {
      const response = await axios.put<TipocarroType>(
        `${URI}/api/tipo_autos/${tipo.id}`, {
        descripcion: tipo.descripcion,
      });
      return response.data;
    }