const Wallet = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-start items-center">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="mt-2 sm:mt-0 h-fit sm:min-h-14 md:min-h-16 flex w-full items-center justify-start gap-x-3 gap-y-1 flex-wrap sm:flex-nowrap md:mt-2 ">
            <div>
              {/* 무슨 wallet-adapter-dropdown이 있어야 한다고 함 */}
              <button className="h-[40px] w-[372px] flex items-center justify-start space-x-2 relative border-4 border-[#94E448] rounded-lg px-3">
                <i className="flex-shrink-0">
                  <img
                    src="/images/Phantom_Wallet.svg"
                    alt="Phantom icon"
                    className="h-6 w-6"
                  />
                </i>
                <span className="flex text-white font-bold vt323-regular text-[34px] px-3 -ml-3">
                  disconnect wallet
                </span>
              </button>
            </div>
            <span className="vt323-regular text-white text-lg sm:text-xl text-left hidden xl:block bg-background">
              Any tokens marked for burn on this page will be burned by
              executing the burn instruction. This process cannot be reversed.
              Make sure you have the correct NFTs selected!
            </span>
            <span className="text-white text-lg md:text-xl text-left xl:hidden">
              Burns are not reversible. Make sure you have the correct NFTs
              selected!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
