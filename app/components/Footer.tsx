import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column mr-40">
    <h4 className="font-semibold text-white">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal text-white">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // const { theme } = useTheme();
  // const backgroundColor = theme === 'dark' ? '#021814' : '#FFFFFF';
  const backgroundColor = '#021814';

  return (
    <section className="z-10 flexStart footer pl-20 pt-10 pb-10" style={{ borderTop: 'none', backgroundColor, color: '#B0B0B0' }}>
      <div className="flex flex-col gap-12 w-full flex-col text-black">
        <div className="flex items-start justify-between">
          {/* <Image src="/logo.svg" width={150} height={60} alt="logo" /> */}

          {/* <p className="text-start text-sm font-normal l-5 max-w-xs text-white">
             Autoapply is a platform that allows you to outsource your job applications to a virtual assistant. We apply to jobs across the web and schedule interviews for you.
          </p> */}
        </div>
        <div className="flex flex-wrap gap-12">
          {/* <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          /> */}

          <div className="flex-1 flex flex-col gap-4">
            {/* <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            /> */}
            {/* <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            /> */}
          </div>
          <div className="ml-auto">
            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />
          </div>
          <div className="ml-auto">
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
        </div>
      </div>

      <div className="flexBetween footer_copyright text-white">
        <p>@ 2024 Taskignite. All rights reserved</p>
        <p className="text-white pr-40">1234 Main St, Anytown, USA</p> {/* Added address */}
        {/* <p className="text-gray">
          <span className="text-black font-semibold">10,214</span> projects
          submitted
        </p> */}
      </div>
    </section>
  );
};

export default Footer;
