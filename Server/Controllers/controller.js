
import connectionDb from "../config/database.js";

export function Upload(req, res) {
    
    // Misalnya, Anda mengunggah file dengan multer dan disimpan dalam req.file
    const nama = req.body.nama; 
    const upload_transaction = req.file.filename; 

    // Simpan data ke database
    const sql = 'INSERT INTO form_image (nama, upload_transaction) VALUES (?, ?)';
    connectionDb.query(sql, [nama, upload_transaction], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' , data : true });
    });


}
