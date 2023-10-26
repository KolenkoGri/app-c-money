import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Layout from "./components/Layout";
import LoginPage from "./pages/loginPage";
import { AccountsPage } from "./pages/accountsPage/accountsPage";
import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/Page404";
import ExitPage from "./pages/exitPage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { ExchangePage } from "./pages/exchangePage/exchangePage";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/accounts" element={<AccountsPage />} />
                        <Route path="/exit" element={<ExitPage />} />
                        <Route path="*" element={<Page404 />} />
                        <Route path="accounts/:id" element={<DetailPage />} />
                        <Route path="exchange" element={<ExchangePage />} />
                    </Routes>
                </Layout>
            </Main>
            <Footer />
        </>
    );
}

export default App;
