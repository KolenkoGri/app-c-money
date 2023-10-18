import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Login from "./pages/loginPage";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Layout>
                    <Login />
                </Layout>
            </Main>
            <Footer />
        </>
    );
}

export default App;
