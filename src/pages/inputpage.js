import { MdRefresh } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import Header from "../components/header";
import Footer from "../components/footer";

const InputPage = () => {
    return (
        <div>
            <Header/>

        <div className="space-y-4 w-[80%] h-[66.9vh] mx-auto">
            
            <h1 className="mb-7 font-semibold text-4xl text-center pt-9 font-inter">FORM INPUT DATA ARSIP</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="col-span-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="lembaga">Nama Lembaga</label>
                  
                    <input
                        name="lembaga"
                        className="w-full p-3 border border-gray-400 rounded-lg bg-gray-300"
                        type="text"
                        placeholder="Nama Lembaga"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold" htmlFor="klasifikasi">Kode Klasifikasi</label>
                    <input
                        name="klasifikasi"
                        className="w-full p-3 border border-gray-400 rounded-lg"
                        type="text"
                        placeholder="Kode Klasifikasi"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold" htmlFor="waktu">Kurun Waktu</label>
                    <input
                        name="waktu"
                        className="w-full p-3 border border-gray-400 rounded-lg"
                        type="number"
                        placeholder="Tahun"
                    />
                </div>
            </div>
            <div>
                <label className="block mb-2 text-xl font-bold" htmlFor="informasi">Informasi Arsip</label>
                <textarea
                    name="informasi"
                    className="w-full min-h-32 p-3 border border-gray-400 rounded-lg"
                    placeholder="Uraian Informasi Arsip"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                <div>
                    <label className="block mb-2 text-xl font-bold" htmlFor="jumlah">Jumlah</label>
                    <div className="grid grid-cols-2 gap-x-3">
                        <input
                            name="jumlah"
                            className="p-3 border border-gray-400 rounded-lg"
                            type="text"
                            placeholder="Jumlah"
                        />
                        <select
                            name="tipe"
                            className="p-3 border border-gray-400 rounded-lg"
                        >
                            <option value="">Tipe Berkas</option>
                            <option value="berkas">Berkas</option>
                            <option value="arsip">Arsip</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold" htmlFor="retensi">Retensi Aktif</label>
                    <select
                        name="retensi"
                        className="w-full p-3 border border-gray-400 rounded-lg"
                    >
                        <option value="">Pilih Retensi Aktif</option>
                        <option value="1">1 Tahun</option>
                        <option value="2">2 Tahun</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold">Status Arsip</label>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="asli"
                                name="asli"
                                className="mr-2"
                            />
                            <label htmlFor="asli">Asli</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="tekstural"
                                name="tekstural"
                                className="mr-2"
                            />
                            <label htmlFor="tekstural">Tekstural</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="kondisi"
                                name="kondisi"
                                className="mr-2"
                            />
                            <label htmlFor="kondisi">Kondisi Arsip Baik</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block mb-2 text-xl font-bold" htmlFor="lainnya">Lainnya</label>
                    <textarea
                        name="lainnya"
                        className="w-full min-h-20 p-3 mb-2 border border-gray-400 rounded-lg"
                        placeholder="Keterangan Lainnya"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <button className=" flex items-center w-full p-2 font-bold text-gray-400 border border-gray-400 rounded-md text-md justify-center" name="reset"><MdRefresh className="text-md mr-2"></MdRefresh>Reset Data</button>
                        <button className=" flex items-center w-full p-2 font-bold text-white bg-[#4d5d53] border-[#4d5d53] rounded-md text-md justify-center" name="reset"><MdOutlineFileUpload className="text-md mr-2"></MdOutlineFileUpload>Submit Data</button>
                    </div>
                </div>
            </div>



        </div>
        <Footer/>
        </div>
    );
};

export default InputPage;
