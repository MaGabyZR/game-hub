
const getCroppedImageUrl = (url:string) => {
    if (!url) return ''; //temporary solution for game that don´t have an image.

    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;