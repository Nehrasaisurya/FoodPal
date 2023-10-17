import styles from "./Styles";
import { footerLinks } from "../util/constants";
import { Link } from "react-router-dom";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col lg:px-24 md:px-8 px-6 py-5 bg-[#FFB619] bg-opacity-90 `}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full border-b border-b-black border-opacity-70`}
      >
        <div className="flex-1.5 flex flex-col justify-start mr-10">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-3xl font-bold">
              <span className="text-red-500">F</span>ood
              <span className="text-red-500">P</span>al
            </span>
          </Link>
          <p className={`${styles.paragraph} mt-4 max-w-312px`}>
            Best cooks and Best delivery guys at your service.Hot and tasty food
            will reach you in 20min.
          </p>
        </div>

        <div className="flex-1.5 w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col my-4 min-w-150px"
            >
              <h4 className="font-poppins text-18px leading-27px text-black font-bold">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-16px leading-24px text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-1px border-t-#3F3E45">
        <p className="font-poppins font-normal text-center text-18px leading-27px text-white">
          Copyright Ⓒ {Year}{" "}
          <span className="font-medium cursor-pointer px-1 text-black">
            <span className="text-red-500">F</span>ood
            <span className="text-red-500">P</span>al
          </span>{" "}
          All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
