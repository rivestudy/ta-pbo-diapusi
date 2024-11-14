

const HomePage = () => {
    return (
     <div id="homepage">
        <div className="text-black text-center justify-center flex-1 h-[50vh] bg-gray-400" id="herosection">
            <h1 className="text-4xl font-bold pt-[12vh]">Selamat Datang</h1>
            <h3 className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem error aliquam illum laboriosam, incidunt assumenda commodi officiis perspiciatis consequatur?</h3>
            <div className="mx-auto bg-white w-[70vw] items-center p-2 flex h-16 rounded-lg mt-[10vh]">
                <select className="items-center h-12 border-gray-600 w-[50vw] p-4"></select>
                <button className="text-white bg-green-900 rounded-lg w-[9.5vw] ml-[0.5vw] text-xl h-12">Input Data</button>
                <button className="text-green-950 bg-lime-200 rounded-lg w-[9.5vw] ml-[0.5vw] text-xl h-12">Lihat Daftar</button>
            </div>
        </div>
        <div>
            
        </div>
     </div>   
    )

}
export default HomePage;