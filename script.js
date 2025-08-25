document.getElementById('activateButton').addEventListener('click', function() {
    // ユーザーに気づかれないように、悪意のあるプロセスをシミュレート
    console.log("⚠️注意: 実際のワンクリック詐欺では、以下の行動がユーザーの同意なく行われます。");
    console.log("・IPアドレスや端末情報の取得が完了しました。");
    console.log("・ウェブカメラへのアクセス試行中...");
    console.log("・位置情報の取得が完了しました。");
    console.log("・端末にマルウェアのインストールを試行中...");

    // ユーザーには「駆除中」のメッセージを表示し、安心させる
    const alertContainer = document.querySelector('.alert-container');
    alertContainer.innerHTML = '<h1>駆除中...</h1><p>数秒お待ちください。</p><div class="loader"></div>';

    // 駆除が完了したように見せかける
    setTimeout(() => {
        alertContainer.innerHTML = '<h1>駆除が完了しました</h1><p>お客様の端末は安全になりました。ご協力ありがとうございました。(Ctrl+Shift+Iを押してデベロッパーツールを開き、Consoleのところを確認してみましょう)</p>';
    }, 3000); // 3秒後にメッセージを変更
});