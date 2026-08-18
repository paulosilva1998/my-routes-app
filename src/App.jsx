import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CustomerList from "./pages/CustomerList";
import CustomerDetails from "./pages/CustomerDetails";

// Dados estáticos dos clientes
const customersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Springfield",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    address: "456 Elm St, Springfield",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "(555) 555-5555",
    address: "789 Oak St, Springfield",
  },
];

// Loader para buscar todos os clientes
const customersLoader = () => {
  return customersData;
};

// Loader dinâmico para buscar um cliente pelo ID recebido na URL
const customerDetailsLoader = ({ params }) => {
  const customerId = parseInt(params.customerId, 10);
  const customer = customersData.find((c) => c.id === customerId);

  if (!customer) {
    throw new Error("Cliente não encontrado");
  }

  return customer;
};

// Configuração das Rotas
const router = createBrowserRouter([
  {
    path: "/customers",
    children: [
      {
        index: true,
        element: <CustomerList />,
        loader: customersLoader,
      },
      {
        path: ":customerId",
        element: <CustomerDetails />,
        loader: customerDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;