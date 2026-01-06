import React from "react";
import "@/app/styles/footer.css"

const Footer: React.FC = () => {
  const currentYear = (new Date()).getFullYear();
  return <div className="footer">© {currentYear} Le Trung Duc. All Rights Reserved.</div>;
};
export default Footer;
