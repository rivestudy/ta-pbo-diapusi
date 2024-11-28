import Header from "../components/header";
import Footer from "../components/footer";


const ViewPage = () => {
  return (
    <div >
      <Header/>
      <div id="wrapper" className="min-h-screen p-6 bg-gray-200 font-inter">
         <div className="container mx-auto">
        <h1 className="mb-6 text-3xl font-semibold text-center">
          DAFTAR DATA ARSIP
        </h1>

        <select className="flex w-1/3 p-2 border rounded-md bg-white shadow-sm mx-auto">
          <option>Bagian Bagian</option>
          <option>Bagian Bagian</option>
          <option>Bagian Bagian</option>
        </select>

        <div>
          <input
            type="username"
            id="username"
            placeholder="Cari Berkas"
            className="ml-auto w-64 px-3 py-2 border shadow rounded  block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 peer mb-4"
          ></input>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full w bg-white border border-collapse border-gray-300 rounded-md shadow-md">
            <thead>
              <tr className="text-gray-600 bg-gray-100">
                <th className="px-4 py-3 border-b">No</th>
                <th className="px-4 py-3 border-b">Kode Klasifikasi</th>
                <th className="px-4 py-3 border-b">Divisi</th>
                <th className="px-4 py-3 border-b">User</th>
                <th className="px-4 py-3 border-b">Detail</th>
                <th className="px-4 py-3 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Row Example */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-center border-b">1</td>
                <td className="px-4 py-3 text-center border-b">A-123</td>
                <td className="px-4 py-3 text-center border-b">Arsip Keuangan</td>
                <td className="px-4 py-3 text-center border-b">Ambatron</td>
                <td className="border-b"  >
                <button className="w-20 my-1 bg-[#566861] px-2 py-1 text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">▼ detail</button>
                </td>
                <td className="border-b">
                <button className="my-1 w-16 bg-[#566861] px-1 py-1  text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">Accept</button>
                <button className="my-1 w-16 bg-[#566861] px-1 py-1  text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">Reject</button>
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 text-center border-b">2</td>
                <td className="px-4 py-3 text-center border-b">B-456</td>
                <td className="px-4 py-3 text-center border-b">Arsip Personal</td>
                <td className="px-4 text-center py-3 border-b">Mas Faiz</td>
                <td className="border-b">
                <button className="w-20 my-1 bg-[#566861] px-2 py-1 text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">▼ detail</button>
                </td>
                <td className="border-b">
                <button className="my-1 w-16 bg-[#566861] px-1 py-1  text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">Accept</button>
                <button className="my-1 w-16 bg-[#566861] px-1 py-1  text-white font-semibold block mx-auto hover:bg-[#d0f0bf] active:bg-[#d0f0bf] ">Reject</button>
                </td>
            
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
     
      <Footer/>
    </div>
  );
};

export default ViewPage;
