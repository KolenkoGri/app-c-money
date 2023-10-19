import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Layout from "./components/Layout";
import LoginPage from "./pages/loginPage";
import { AccountsPage } from "./pages/accountsPage/accountsPage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Layout>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/accounts" element={<AccountsPage />} />
                    </Routes>
                </Layout>
            </Main>
            <Footer />
        </>
    );
}

export default App;
