import React from "react";
import ContentRotator from "./ContentRotator";
import LogoNav from "./LogoNav";
import logo from "./logo.svg";

const ViewWrapper = ({ children }) => {
  return (
    <main className="flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] 
    md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
      <div className="relative hidden flex-1 flex-col justify-center px-5 pt-8 md:flex md:px-6 
      md:py-[22px] lg:px-8 bg-primaryGray">
        <LogoNav logo={logo} />
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4 text-black items-start justify-center text-start">
            <h1 className="font-semibold text-3xl max-w-[40rem] w-[640px]">
              <ContentRotator />
            </h1>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
};

export default ViewWrapper;
