export function txtSlicer(txt: string , max: number = 50){
    if(txt.length >= max) return `${txt.slice(0, max)}...`;
    return txt;
}

export function formatNumber(num: string){
    const str = num.toString();
    const reversedStr = str.split('').reverse().join(''); 
    let result = '';

    for (let i = 0; i < reversedStr.length; i++) {
        
        if (i > 0 && i % 3 === 0) {
            result += ','; 
        }
        result += reversedStr[i];
    }

    return result.split('').reverse().join(''); 
}
