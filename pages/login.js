import styles from '../styles/Home.module.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// 現時点で使わないものもあるが今後のことを考えて入れておく
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { useState } from 'react';


export default function Login() {
  // useStateでユーザーが入力したメールアドレスとパスワードを取得する
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ユーザーがログインボタンを押したときにdoLogin関数が実行される
  const doLogin = () => {
    const auth = getAuth();

    // Firebaseで用意されているメールアドレスとパスワードでログインするための関数
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // ログインしたユーザーの情報がuserCredential.userで取得できる
        const user = userCredential.user;
        // ログインができたかどうかをわかりやすくするためのアラート
        alert( 'ログインOK!' );
        console.log( user );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.card}>
      <h1>ログイン</h1>
      <div style={{ paddingBottom: "1rem" }}>
        <Form>
            <FormGroup>
              <Label>
                メールアドレス：
              </Label>
              <Input
                type="email"
                name="email"
                style={{ height: 50, fontSize: "1.2rem" }}
                // onChangeでユーザーが入力した値を取得し、その値をemailに入れる
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>
                パスワード：
              </Label>
              <Input
                type="password"
                name="password"
                style={{ height: 50, fontSize: "1.2rem" }}
                // onChangeでユーザーが入力した値を取得し、その値をpasswordに入れる
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <Button
                style={{ width: 220 }}
                color="primary"
                // ログインボタンがクリックされたときdoRegister関数が実行されるようにする
                onClick={()=>{
                  doLogin();
                }}
              >
              ログイン
            </Button>
        </Form>
      </div>
    </div>
  )
}
