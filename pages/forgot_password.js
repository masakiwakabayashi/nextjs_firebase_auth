import styles from '../styles/Home.module.css'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('');

  // 送信ボタンがクリックされるとdoResetEmail関数が実行される
  const doResetEmail = () => {
    const auth = getAuth();
    const actionCodeSettings = {
      // パスワード再設定後にログイン画面にリダイレクトさせる
      url: 'http://localhost:3000/login',
      handleCodeInApp: false,
    }

    // Firebaseで用意されているパスワード再設定のメールを送るための関数
    sendPasswordResetEmail(auth, email, actionCodeSettings)
    .then(() => {
      // パスワード再設定のメールが送信されたことをわかりやすくするためのアラート
      alert( '送信完了！' );
      console.log(email);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className={styles.card}>
      <h1>パスワード再設定</h1>
      <div>
        <Form>
            <FormGroup>
              <Label>
                メールアドレス：
              </Label>
              <Input
                type="email"
                name="email"
                style={{ height: 50, fontSize: "1.2rem" }}
                // ユーザーが入力したメールアドレスを取得する
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <Button
                style={{ width: 220 }}
                color="primary"
                // ボタンを押すとdoResetEmaiが実行される
                onClick={()=>{
                  doResetEmail();
                }}
              >
              送信
            </Button>
        </Form>
      </div>
    </div>
  )
}
