import { Button } from 'reactstrap';
// AuthContext.jsのuseAuthをインポートする
import { useAuth } from '../context/AuthContext'
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
  // 現在ログインしているユーザーを取得する
  const { currentUser } = useAuth();
  // console.log(currentUser);

  // ログアウトの処理を追記
  const doLogout = () => {
    const auth = getAuth();

    // Firebaseで用意されているログアウトの関数
    signOut(auth)
    .then(() => {
      // ログアウトが完了したことをわかりやすくするためのアラート
      alert( 'ログアウト完了！' );
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // { currentUser.email }を追記
  return (
    <div style={{ padding: "1rem 0" }} >
      { currentUser ? (
        // サーバーサイドとクライアントサイドでレンダーされる内容が違うときにエラーがでないようにする
        <div suppressHydrationWarning={true}>
          {/* useAuth()で取得した現在ログインしているユーザーのメールアドレスを表示 */}
          <div style={{ paddingBottom: "1rem" }}>{ currentUser.email } でログインしています。</div>
          <div>
            <Button onClick={()=>{
              doLogout();
            }} >
              ログアウト
            </Button>
          </div>
        </div>
      ):(
        <div suppressHydrationWarning={true}>ログインしていません。</div>
      )}
    </div>
  );
}

export default Header;
