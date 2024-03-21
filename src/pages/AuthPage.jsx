import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const AuthPage = ({ setIsAuth }) => {
  //giriş butonun tıklanırsa
  const handleClick = () => {
    signInWithPopup(auth, provider)
      //başarılı bir girişi olursa
      .then((data) => {
        console.log(data.user);

        //kullanıcının yetkisini true 'a çek
        setIsAuth(true);
        //kullanıcı bilgisini local'de sakla
        localStorage.setItem("token", data.user.refreshToken);
      });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odaları</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
