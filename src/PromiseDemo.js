

function loadImg(src) {

    const promise = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = () => {
            resolve(img);
        }
        img.onerror = () => {
            reject('图片加载失败');
        }
        img.sec = src;
    });

    return promise;
}

const src = 'https://pic3.zhimg.com/50/v2-fb856713f7f5377971cdc02b7e1ebc6d_hd.jpg';
const result = loadiImg(src);


// 一then一操作
result.then((img) => {
    console.log(`width: ${img.width}`)
}).then((img) => {
    console.log(`height: ${img.height}`)
}).catch((error) => {
    console.log(error);
})