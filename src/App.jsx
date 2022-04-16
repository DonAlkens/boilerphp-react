import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import ProductUpload from "./Pages/ProductUpload";
import Orders from "./Pages/Orders";
import OrderDetail from "./Pages/OrderDetail";
import Customer from "./Pages/Customer";
import AppLayout from "./Shared/Layouts/AppLayout";

const App = () => {
  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="add-product" element={<ProductUpload mode="new" />} />
        <Route
          path="product-edit/:product_id"
          element={<ProductUpload mode="edit" />}
        />
        <Route path="orders" element={<Orders />} />
        <Route path="order/:order_id" element={<OrderDetail />} />
        <Route path="customers" element={<Customer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here | 404!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
