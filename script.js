function updateTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('datetime').innerHTML = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    var greeting;
    if (hours < 12) {
      greeting = 'Selamat Pagi';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Selamat Siang';
    } else {
      greeting = 'Selamat Malam';
    }
    document.getElementById('greetings').innerHTML = greeting;
    setTimeout(updateTime, 1000);
  }
  updateTime();