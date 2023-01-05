import { Button } from 'reactstrap';
// AuthContext.jsのuseAuthをインポートする
import { useAuth } from '../context/AuthContext'
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);

  // ログアウトの処理を追記
  const doLogout = () => {
    const auth = getAuth();

    signOut(auth)
    .then(() => {
      // alert( 'ログアウト完了！' );
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // { currentUser.email }を追記
  return (
    <div style={{ padding: "1rem 0" }} >
      { currentUser ? (
        <div suppressHydrationWarning={true}>
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
