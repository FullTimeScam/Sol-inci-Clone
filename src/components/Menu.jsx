const Menu = () => {
  return (
    <div>
      <div className="text-white bg-[#101010] h-[60px] flex flex-col items-center w-full">
        <div className="grid grid-cols-5 gap-3 w-full">
          <div className="flex-row justify-between w-full items-end mt-5 hidden lg:flex">
            <div className="flex justify-center w-full cursor-pointer">
              <div className="flex flex-col grow 2xl:w-4/5 2xl:grow-0">
                <div className="rounded-t h-10 flex flex-col justify-end items-center grow text-white hover:text-primary bg-transparent">
                  <span className="font-bold press-start-2p-regular text-[30px] xl:text-2xl text-center cursor-pointer mb-1 whitespace-nowrap mx-4 uppercase">
                    NFTs
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row justify-between w-full items-end mt-5 hidden lg:flex">
            <div className="flex justify-center w-full cursor-pointer">
              <div className="flex flex-col grow 2xl:w-4/5 2xl:grow-0">
                <div className="rounded-t h-10 flex flex-col justify-end items-center grow text-white hover:text-primary bg-transparent">
                  <span className="font-bold press-start-2p-regular text-[30px] xl:text-2xl text-center cursor-pointer mb-1 whitespace-nowrap mx-4 uppercase">
                    CNFTs
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row justify-between w-full items-end mt-5 hidden lg:flex">
            <div className="flex justify-center w-full cursor-pointer">
              <div className="flex flex-col grow 2xl:w-4/5 2xl:grow-0">
                <div className="rounded-t h-10 flex flex-col justify-end items-center grow text-white hover:text-primary bg-transparent">
                  <span className="font-bold press-start-2p-regular text-[30px] xl:text-2xl text-center cursor-pointer mb-1 whitespace-nowrap mx-4 uppercase">
                    Tokens
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row justify-between w-full items-end mt-5 hidden lg:flex">
            <div className="flex justify-center w-full cursor-pointer">
              <div className="flex flex-col grow 2xl:w-4/5 2xl:grow-0">
                <div className="rounded-t h-10 flex flex-col justify-end items-center grow text-white hover:text-primary bg-transparent">
                  <span className="font-bold press-start-2p-regular text-[30px] xl:text-2xl text-center cursor-pointer mb-1 whitespace-nowrap mx-4 uppercase">
                    Domains
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row justify-between w-full items-end mt-5 hidden lg:flex">
            <div className="flex justify-center w-full cursor-pointer">
              <div className="flex flex-col grow 2xl:w-4/5 2xl:grow-0">
                <div className="rounded-t h-10 flex flex-col justify-end items-center grow text-white hover:text-primary bg-transparent">
                  <span className="font-bold press-start-2p-regular text-[30px] xl:text-2xl text-center cursor-pointer mb-1 whitespace-nowrap mx-4 uppercase">
                    CleanUp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-0.5 md:h-1 w-full border-solid border-[#94E448] rounded bg-[#94E448]" />
    </div>
  );
};

export default Menu;
