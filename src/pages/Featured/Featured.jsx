import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import './Featured.css';

const Featured = () => {
  return (
    <div className="fetured-item bg-fixed my-16">
      <SectionTitle
        heading="FROM OUR MENU"
        subHeading="---Check it out---"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-16 gap-10">
        <img className="w-[548px]" src={featuredImg} alt="" />
        <div className="text-white flex-col gap-4">
          <p className="uppercase my-4">August 1, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            saepe sit voluptatibus. Fuga vel officia ullam, amet quis magni
            sapiente quod laudantium perspiciatis ex et omnis natus dicta illo
            numquam at laborum minima repellendus nobis consequatur ipsam
            repudiandae neque voluptas? Quos atque quisquam distinctio nostrum
            consequuntur aliquid quod voluptas ad!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
