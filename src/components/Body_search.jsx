const Body_search = () => {
  return (
    <div className="flex items-center justify-start rounded-full bg-[#426621] w-4/5 mb-5 md:mb-7 h-10 min-w-[280px] max-w-[650px] sm:ml-5 px-4">
      <svg
        className="text-[#69A334] h-6 w-6 mr-2"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        ></path>
      </svg>
      <input
        className="font-header vt323-regular text-xl text-[#92E147] md:text-[40px] uppercase bg-[#426621] placeholder:text-[#92E147] outline-none rounded-2xl w-full h-10"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Body_search;
