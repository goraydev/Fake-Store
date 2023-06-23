export const fileUpload = async (file) => {
    if (!file) return null;
    const cloudURL = 'https://api.cloudinary.com/v1_1/dmmewk1oj/upload';
    let formdata = new FormData();
    formdata.append("upload_preset", "react-journal");
    formdata.append("file", file);

    let requestOptions = {
        method: 'POST',
        body: formdata,
    };


    try {

        const resp = await fetch(cloudURL, requestOptions);
        const results = await resp.json();
        return results.secure_url;

    } catch (error) {
        //throw new Error(error.message);
        return null;
    }
}
