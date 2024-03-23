import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./pages/Home";
import "./App.css";

// Create a client
export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="mendang-mending-theme">
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
