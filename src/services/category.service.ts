import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const { user, token } = useContext(AuthContext);

export const fetchCategories = async () => {
    const response = await fetch('http://localhost:3000/categories', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };