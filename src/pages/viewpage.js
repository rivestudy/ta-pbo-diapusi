
const ViewPage = () => {
  return (
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
                <th className="px-4 py-3 border-b">Uraian</th>
                <th className="px-4 py-3 border-b">Kurun Waktu</th>
                <th className="px-4 py-3 border-b">Jumlah</th>
                <th className="px-4 py-3 border-b">Retensi Aktif</th>
                <th className="px-4 py-3 border-b">Retensi Inaktif</th>
                <th className="px-4 py-3 border-b">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Row Example */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">1</td>
                <td className="px-4 py-3 border-b">A-123</td>
                <td className="px-4 py-3 border-b">Arsip Keuangan</td>
                <td className="px-4 py-3 border-b">2010 - 2020</td>
                <td className="px-4 py-3 border-b">50</td>
                <td className="px-4 py-3 border-b">10 Tahun</td>
                <td className="px-4 py-3 border-b">15 Tahun</td>
                <td className="px-4 py-3 border-b">Dokumen keuangan penting</td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b">2</td>
                <td className="px-4 py-3 border-b">B-456</td>
                <td className="px-4 py-3 border-b">Arsip Personal</td>
                <td className="px-4 py-3 border-b">2015 - 2025</td>
                <td className="px-4 py-3 border-b">100</td>
                <td className="px-4 py-3 border-b">15 Tahun</td>
                <td className="px-4 py-3 border-b">20 Tahun</td>
                <td className="px-4 py-3 border-b">Dokumen pribadi pegawai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
