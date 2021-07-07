function requestPermission() {
    Notification.requestPermission().then((result) => {
      if (result === 'denied') {
        console.log('Fitur notifikasi tidak diijinkan.');
        return;
      } if (result === 'default') {
        console.log('Pengguna menutup kotak dialog permintaan ijin.');
        return;
      }
      console.log('Fitur notifikasi diijinkan.');
    });
}


if ('Notification' in window) {
    requestPermission();
} else {
    console.error('Browser tidak mendukung fitur notifikasi.');
}