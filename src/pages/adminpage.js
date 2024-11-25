const AdminPage = () => {
    return (
        <div id="wrapper" className="min-h-screen p-6 bg-gray-200">
            <div className="container mx-auto">
    

                <h1 className="mb-6 text-3xl font-semibold text-center">Daftar Divisi</h1>

                <div className="flex items-center justify-between mb-6">
                    <select className="w-[30%] p-2 border rounded-md bg-white shadow-sm">
                        <option>Bagian Bagian</option>
                        <option>Bagian Bagian</option>
                        <option>Bagian Bagian</option>
                    </select>

                    <input
                        className="w-[30%] p-2 border rounded-md bg-white shadow-sm"
                        type="text"
                        placeholder="Cari Berkas"
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-collapse border-gray-300 rounded-md shadow-md">
                        <thead>
                            <tr className="text-gray-600 bg-gray-100">
                            <th className="px-4 w-[10%] py-3 border-b">No</th>
                                <th className="px-4 w-[70%] py-3 border-b">Nama Lembaga</th>
                                <th className="px-4 w-[20%] py-3 border-b">Aksi</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table Row Example */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 w-[10%] py-3 border-b">1</td>
                                <td className="px-4 w-[70%] py-3 border-b">A-123</td>
                                <td className="px-4 w-[20%] py-3 border-b">Arsip Keuangan</td>
                            </tr>
                            {/* Add more rows as needed */}
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 w-[10%] py-3 border-b">2</td>
                                <td className="px-4 w-[70%] py-3 border-b">B-456</td>
                                <td className="px-4 w-[20%] py-3 border-b">Arsip Personal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
