const SocialSidebar = () => {
  return (
    <div className="fixed top-1/4 right-0 flex flex-col space-y-2 z-50">
      <a
        href="#"
        className="bg-yellow-600   p-3 size-12 flex items-center justify-center border border-white shadow-md rounded-lg"
      >
        <img src="/icons/mail.png" alt="Email" className="  " />
      </a>
      <a
        href="#"
        className="bg-blue-500   p-3 size-12 flex items-center justify-center border border-white shadow-md rounded-lg"
      >
        <img src="/icons/facebook.png" alt="Facebook" className="  " />
      </a>
      <a
        href="#"
        className="bg-blue-700   p-3 size-12 flex items-center justify-center border border-white shadow-md rounded-lg"
      >
        <img src="/icons/twitter.png" alt="Twitter" className="  " />
      </a>
      <a
        href="#"
        className="bg-green-600   p-3 size-12 flex items-center justify-center border border-white shadow-md rounded-lg"
      >
        <img src="/icons/whatsapp.png" alt="WhatsApp" className="  " />
      </a>
    </div>
  );
};

export default SocialSidebar;
