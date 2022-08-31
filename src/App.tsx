import SimpleBarReact from "simplebar-react";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "./layouts/Main";
import Header from "./components/Header";

import "simplebar/dist/simplebar.min.css";
import "./assets/fonts.css";
import CurrentDayList from "./components/CurrentDayList";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Header />
        <SimpleBarReact
          data-simplebar-direction="rtl"
          className="w-full h-[calc(100vh-13rem)]"
        >
          <CurrentDayList />
        </SimpleBarReact>
        <Footer />
      </Main>
    </QueryClientProvider>
  );
};

export default App;
