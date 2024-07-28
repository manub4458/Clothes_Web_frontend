"use server"
export const getCategoryById = async (url)=>{
    try {
        
        const data = await fetch(url);
        return data.json();
    } catch (error) {
        return null;
    }
}