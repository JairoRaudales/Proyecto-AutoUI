import React, { useState, useEffect } from "react";
import axios from "axios";

export interface MarcaType {
    id: number;
    descripcion: string;
  }
  
  const URI = "http://localhost:8080";
  
  export async function getMarca(): Promise<MarcaType[]> {
    const response = await axios.get<MarcaType[]>(`${URI}/api/marca`);
    return response.data;
  }
  
  export async function addColor(marca: string): Promise<MarcaType> {
    const response = await axios.post<MarcaType>(
      `${URI}/api/marca`, {
      descripcion: marca,
    });
    return response.data;
  }
  
  export async function deleteMarca(id: number): Promise<void> {
    await axios.delete<void>(
      `${URI}/api/marca/${id}`);
  }
  
  export async function updateMarca(marca: MarcaType): Promise<MarcaType> {
      const response = await axios.put<MarcaType>(
        `${URI}/api/colores/${marca.id}`, {
        descripcion: marca.descripcion,
      });
      return response.data;
    }