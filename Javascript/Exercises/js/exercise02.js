//Indicar el nombre de la resolución dada esta puede exceder en cantidad pero no ser menor a la minima que pide cada una

/**
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nameResolution(width, height) {
    if (width >= 7680 && height >= 4320) {
        return "8K";
    } else if (width >= 3840 && height >= 2160) {
        return "4K";
    } else if (width >= 2560 && height >= 1440) {
        return "WQHD";
    } else if (width >= 1920 && height >= 1080) {
        return "FHD";
    } else if (width >= 1280 && height >= 720) {
        return "HD";
    } else {
        return "Fallo";
    }
}

let name = nameResolution(2560,1000);
console.log(name);