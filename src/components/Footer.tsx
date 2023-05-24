import styles from "../stlyes";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full`}>
        <div className={`flex flex-col flex-1 justify-start mr-10`}>
          <img
            className="w-[266px] h-[72px] object-contain"
            src={logo}
            alt="Hoo-Bank"
          />
          <p className={`${styles.paragraph} mt-6 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div
          className={`flex flex-row flex-wrap flex-[1.5] justify-between md:mt-0 mt-10`}
        >
          {footerLinks.map((footerlink, inedx) => (
            <div
              key={inedx}
              className="flex flex-col ss:my-0 my-4 min-w-[150px] "
            >
              <h4
                className={`font-poppins font-medium text-[18px] leading-7 text-white font `}
              >
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-dimWhite cursor-pointer text-[16px] leading-6 hover:text-secondary ${
                      footerlink.links.length - 1 !== index ? "mb-4" : "mb-0"
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
      <div
        className={`w-full flex items-center justify-between md:flex-row flex-col border-t-[1px] border-[#3F3E45] pt-6 `}
      >
        <p
          className={`font-poppins font-normal text-[18px] leading-7 text-dimWhite font mb-1`}
        >
          2023 HooBank By Mouaz Taher. All Rights Reserved.
        </p>
        <div className={`flex flex-row md:mt-0 mt-6`}>
          {socialMedia.map((social, index) => (
            <div key={social.id}>
              <a href={social.link} target="_blank">
                <img
                  className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                    socialMedia.length - 1 !== index ? "mr-6" : "mr-0"
                  }`}
                  src={social.icon}
                  alt={social.id}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
