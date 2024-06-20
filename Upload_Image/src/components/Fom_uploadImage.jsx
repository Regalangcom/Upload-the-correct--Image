import React, { useState  , useRef} from 'react'
import axios from 'axios'



const UploadImage = () => {

    const [ responseMessage , setresponseMessage ] = useState("")

    const [ Formdata , setformdata] = useState({ nama : "", image : null })


    const handleSubmit =  async (e) => {
            e.preventDefault()

            const datas = new FormData()
            datas.append('nama' ,  Formdata.nama)
            datas.append('image' , Formdata.image )

        try {
            const response = await axios.post(`${import.meta.env.VITE_LOCAL_PORT_SERVER}/upload` , datas)

            setresponseMessage(response.data.message)
            setformdata({ nama : "" , image : null})


             
            

        } catch (error) {
            console.log("error submit" , error.message);            
        }

            console.log("active");
    }

    const handleChange = (e) => {
        const { id , value , files } = e.target

            setformdata({
                ...Formdata,
                [id] : files ? files[0] : value
            })

    }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        {responseMessage}
        <h2 className='mb-3'>Silahkan Upload Bukti Transaksi </h2>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nama
        </label>
        <input
          type="text"
          id="nama"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={Formdata.nama}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Gambar
        </label>
        <input
          type="file"
          id="image"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  ) 

}
  


export default UploadImage
