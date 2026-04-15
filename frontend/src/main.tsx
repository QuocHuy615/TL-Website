import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { AuthProvider } from "./context/CustomerAuthContext.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import { Toaster } from "@/components/ui/sonner";
import { AdminAuthProvider } from "./context/AdminAuthContext.tsx";

requestAnimationFrame(() => {
  void import("./index.css");
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AdminAuthProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster richColors position="top-center" />
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">
                Đang tải giao diện...
              </div>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </CartProvider>
      </AuthProvider>
    </AdminAuthProvider>
  </StrictMode>
);
