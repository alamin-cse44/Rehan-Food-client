import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImage from "../../../assets/menu/banner3.jpg";
import desertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Rehan's Food | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title="our menu"></Cover>
      <SectionTitle
        heading="TODAY'S OFFER"
        subHeading="---Don't miss---"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={desertImage}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImage}></MenuCategory>
      <MenuCategory
        items={salad}
        title="salad"
        img={saladImage}
      ></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImage}></MenuCategory>
    </div>
  );
};

export default Menu;
