const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // +90 是因为初始 CSS 设置为 rotate(90deg)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // 处理秒针旋转到 0 秒时的抖动
    if (secondsDegrees === 90) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }


    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; // 分针也受秒数影响，更平滑
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    // 处理分针旋转到 0 分时的抖动
    if (minsDegrees === 90) {
        minsHand.style.transition = 'none';
    } else {
        minsHand.style.transition = 'all 0.1s cubic-bezier(0.1, 2.7, 0.58, 1)'; // 分针过渡稍慢
    }

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; // 时针受分钟影响
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

     // 处理时针旋转到 12 点时的抖动
    if (hourDegrees === 90) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = 'all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)'; // 时针过渡更慢
    }

    // console.log(`${hour}:${mins}:${seconds}`); // 可以在控制台查看时间
}

// 初始设置一次时间
setDate();

// 每秒更新一次时间
setInterval(setDate, 1000);
