import bgimage from "../images/bgdark.jpg";
import { CgAddR } from "react-icons/cg";
import { IoDocumentOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <div id="homepage">
      <div
        className="text-black text-center justify-center flex-1 h-[60vh] bg-gray-400 relative "
        id="herosection"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-6xl font-bold pt-[12vh] text-stone-200">
          Selamat Datang
        </h1>
        <h3 className="text-2xl text-stone-300 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatem error aliquam illum laboriosam, incidunt assumenda commodi
          officiis perspiciatis consequatur?
        </h3>
        <div className="mb-20 pb-20">    
            <div className="mx-auto bg-white w-[70vw] items-center p-2 flex h-16 rounded-lg mt-[10vh]">
          <select className="items-center h-12 border-gray-600 w-[50vw] p-4"></select>
          <button className="flex items-center text-white bg-[#4d5d53] rounded-lg w-[9.5vw] ml-[0.6vw] text-lg h-12">
            <CgAddR className="mx-4" />
            {/* Margin-right to create space between icon and text */}
            Input Data
          </button>

          <button className="flex items-center text-green-950 bg-[#d0f0bf] rounded-lg w-[9.5vw] ml-[0.6vw] text-lg h-12">
            <IoDocumentOutline className="mx-4"></IoDocumentOutline>
            Lihat Daftar
          </button>
        </div>
        </div>
    
      </div>
      <div className="font-inter mx-20 pt-5">
        <h1 className="font-inter text-4xl text-center font-bold my-8">
          Tentang
        </h1>
        <div className="grid grid-cols-3 text-justify gap-7 text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            earum impedit officia recusandae. Non voluptates similique laborum
            excepturi. Cum, minus architecto! Consequatur iure assumenda
            voluptatibus illo officia corporis porro?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            earum impedit officia recusandae. Non voluptates similique laborum
            excepturi. Cum, minus architecto! Consequatur iure assumenda
            voluptatibus illo officia corporis porro?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad
            earum impedit officia recusandae. Non voluptates similique laborum
            excepturi. Cum, minus architecto! Consequatur iure assumenda
            voluptatibus illo officia corporis porro?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
