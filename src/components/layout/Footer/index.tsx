import { Responsive, Image } from "@/components/layout";

const Footer = () => {
  return (
    <Responsive
      className="flex items-center gap-10 py-9 md:gap-4 md:flex-col bg-[#333] text-white"
      parentClassName="border-t border-secondary-20"
    >
      <footer className="w-full flex justify-between items-center">
        <span className="font-semibold">Copyright 2023</span>
      </footer>
    </Responsive>
  );
};

export default Footer;
