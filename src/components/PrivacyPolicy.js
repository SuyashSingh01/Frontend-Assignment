import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen">

      {/* Header Section */}
      <header className="text-center w-full mb-8 bg-[#F4F0F8] p-7 md:p-24">
        <h1 className="text-xl md:text-3xl font-bold font-headingfont text-[#232536] md:p-5">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mt-1">Last updated on 27th January 2023</p>
      </header>

      <div className="max-w-4xl w-full mx-auto rounded-lg p-6 md:p-12">
        <section className="text-gray-700 my-5 md:my-10">
          <h2 className="text-xl md:text-3xl font-headingfont font-semibold text-[#232536] mb-4 md:mb-10 ">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mb-6 leading-relaxed text-sm md:text-base font-bodyfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-xl md:text-3xl font-headingfont font-semibold text-[#232536] md:mb-10 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h2>
          <p className="mb-6 leading-relaxed text-sm md:text-base font-bodyfont ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="leading-relaxed text-sm md:text-base font-bodyfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
