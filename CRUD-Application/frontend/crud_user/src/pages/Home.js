import Header from "./root/Header";
import Menu from "./root/Menu";
import Main from "./root/Main";
import Footer from "./root/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Main/>
      <Footer />
    </div>
  );
}
