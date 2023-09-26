
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter(item => item.category === "popular");
 

  return (
    <div className="my-24">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {
            popular.map(item => <MenuItem 
            key={item._id}
            item={item}
            ></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;
