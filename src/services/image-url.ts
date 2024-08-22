import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp'; 


const getCroppedImageUrl = (url:string) => {
    //if (!url) return ''; //temporary solution for game that don´t have an image.
    //import an blanck image to handle the games with no image. 
    if (!url) return noImage;



    const target = 'media/';
    const index = url.indexOf(target) + target.length; 
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);

}

export default getCroppedImageUrl;