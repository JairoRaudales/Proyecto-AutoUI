import React from "react";

import { 
    useState 
    , useEffect
} from "react";

import {
  ColorType,
  getColors,
  addColor,
  deleteColor,
  updateColor,
} from "../services/ColorServices";

function Color() {
  const [colors, setColors] = useState<ColorType[]>([]);
  const [color, setColor] = useState<string>("");
  const [editingColor, setEditingColor] = useState<ColorType | null>(null);
  const [showUpdateButton, setShowUpdateButton] = useState<boolean>(false);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const addColorEvent = async () => {
    const newColor = await addColor(color);
    setColors([...colors, newColor]);
    setColor("");
  };

  const deleteColorEvent = async (id: number) => {
    await deleteColor(id);
    setColors(colors.filter((color) => color.id !== id));
  };

  const editColorEvent = (color: ColorType) => {
    setEditingColor(color);
    setShowUpdateButton(true);
  };

  const updateColorEvent = async () => {
    if (!editingColor) return;
    const updatedColor = await updateColor(editingColor);
    setEditingColor(null);
    setColors(
      colors.map((color) => (color.id === updatedColor.id ? updatedColor : color))
    );
    setShowUpdateButton(false);
  };

  const cancelUpdateEvent = () => {
    setEditingColor(null);
    setShowUpdateButton(false);
  };

  useEffect(() => {
    async function fetchData() {
      const x = await getColors();
      setColors(x);
    }
    fetchData();
  }, []);

  return(
    <div>
          <label>Color:</label>
          <select name="color">
            <option value="rojo">Rojo</option>
            <option value="verde">Verde</option>
            <option value="azul">Azul</option>
          </select>
        </div>

  )
 }

 export default Color;