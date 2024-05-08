import { Link } from "react-router-dom";
import coverImage from "../assets/coverimage.jpeg";
const MessPage = (props) => {
  console.log("mess page");
  return (
    <section>
      <div>
        <img
          src={coverImage}
          className="w-full h-[35rem] bg-no-repeat bg-cover object-fill place-content-center"
        />
      </div>
      <div className="relative bottom-14">
        <div className="banner">
          <Link to="donate">Donate Food</Link>
        </div>
        <div className="content">
          <p className="text">
            “Cutting food waste is a delicious way of saving money, helping to
            feed the world and protect the planet.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default MessPage;
