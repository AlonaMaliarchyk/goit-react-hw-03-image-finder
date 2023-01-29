import axios from 'axios';

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",

})
export const searchPhoto=async(search, page)=>{
    const { data } = await instance.get(`?q=${search}&page=${page}&key=31935379-2c0634669ff1003b6320ce3d9&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}
