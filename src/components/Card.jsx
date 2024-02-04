import linkedin from "../images/linkedin2.png"
export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-full"
          src="https://media.licdn.com/dms/image/C4D03AQGzdJmq5loRrg/profile-displayphoto-shrink_800_800/0/1651858522578?e=1712793600&v=beta&t=41S_qWq56aU-mfaRFJTnrP3G4m5sVrIl2BruHrnsN3k"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            Avinash Sirohi ,
            <span className=" italic text-[18px] font-semibold text-gray-600 dark:text-white">
              {" "}
              Web Developer
            </span>{" "}
          </h5>

          <span className="text-gray-600 dark:text-white italic">
            {" "}
            Tata Consultancy Services
          </span>
        </a>
        <br></br>
        <br></br>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/avinashsirohi86/"
            className="text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-between items-center gap-[10px]"
          >
            <img  className=" w-[30px]"src={linkedin} />
            Connect
          </a>
        </div>
      </div>
    </div>
  );
}
