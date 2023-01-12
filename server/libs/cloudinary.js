import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: 'ronny1629',
    api_key: '226781823381244',
    api_secret: 'pLXxVFog-aSnwfSiSl-XCtrddo4'
})

export const uploadAImage =  async filePath =>{
    return await cloudinary.uploader.upload(filePath , {
        folder: 'posts'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}
