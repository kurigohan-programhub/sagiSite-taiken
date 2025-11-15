document.getElementById('loginForm').addEventListener('submit', function(event) {
    // フォームの送信を一時的に停止する
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("-------------------");
    console.log("注意: これはフィッシング詐欺の仕組みの再現です。以下の情報は送信されていませんが、実際の詐欺では悪意のある第三者へ送られます。");
    console.log("送信されたメールアドレス: " + email);
    console.log("送信されたパスワード: " + password);
    console.log("-------------------");

    // ユーザーには、ログイン失敗を通知して再入力を促す
    alert('ログインに失敗しました。メールアドレスまたはパスワードが間違っています。もう一度お試しください。');
});
