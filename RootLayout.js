import React from "react";
import "./style.css"; // Assuming you have Tailwind's styles imported

const metadata = {
  title: "Portfolio ~ Deepak Yadav",
  description: "Created with the help of React & Tailwind CSS",
};

const RootLayout = ({ children }) => {
  React.useEffect(() => {
    document.title = metadata.title;
  }, []);

  return (
    <div lang="en" className="bg-gray-900 text-white antialiased">
      {children}
    </div>
  );
};

export default RootLayout;
