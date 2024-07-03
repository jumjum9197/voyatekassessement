import React from "react";

interface PageLayoutProps {
  heading?: string;
  paragraph?: string;
  headerActions?: React.ReactNode;
  footerActions?: React.ReactNode;
  children?: React.ReactNode;
  secondText: string;
  firstText: string;
  iconBefore?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  heading,
  paragraph,
  headerActions,
  footerActions,
  children,
  secondText,
  firstText,
  iconBefore,
}) => {
  return (
  
   <main  className=" m-5 ">
    <p  className="text-sm text-gray-700 mb-10 text-lg"> <span>{firstText}</span>  <span>{secondText}</span></p>
    <p>Users & Roles</p>
    <p>Manage all users in your business</p>

   </main>
  );
};

export default PageLayout;
