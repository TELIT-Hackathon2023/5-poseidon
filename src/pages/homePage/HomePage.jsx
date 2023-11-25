import CarNumber from "../../components/carNumber/CarNumber"
import ReserveButton from "../../components/reserveButton/ReserveButton";
import Header from "../../components/header/Header";
import YourSection from "../../components/yourSection/YourSection";
import YourPlace from "../../components/yourPlace/YourPlace";

const HomePage = () => {
    return (
        <section className="container">
            <CarNumber />
            <ReserveButton />
            <YourSection />
            <YourPlace />
        </section>
    )
}

export default HomePage;