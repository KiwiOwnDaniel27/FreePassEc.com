import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PagoKushki = ({ totalAmount }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const irAPaginaPago = (e) => {
    e.preventDefault();
  
    if (totalAmount === 0) {
      alert("El carrito está vacío");
      return;
    }
  
    setLoading(true);
    
    // 🟢 Pasamos el valor al navegar
    navigate("/pago", { state: { totalAmount } });
  };

  return (
    <form onSubmit={irAPaginaPago}>
      <button
        type="submit"
        disabled={loading}
        className="mt-3 w-full bg-green-500 hover:bg-green-600 
        text-white py-2 rounded-lg 
        hover:scale-105 active:scale-95 
        disabled:cursor-not-allowed"
      >
        {loading ? "Procesando..." : "Pagar"}
      </button>
    </form>
  );
};

export default PagoKushki;