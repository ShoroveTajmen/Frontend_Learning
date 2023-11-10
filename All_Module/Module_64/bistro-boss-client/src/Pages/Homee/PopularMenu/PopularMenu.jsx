
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MeniItem from "../../Shared/MenuItem/MeniItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
                ></SectionTitle>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                       popular.map(item => <MeniItem key={item._id} item={item}></MeniItem>)
                    }
                </div>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </section>
        </div>
    );
};

export default PopularMenu;