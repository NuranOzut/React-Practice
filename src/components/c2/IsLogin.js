import React from "react";

const IsLogin = () => {
  const isLogin = false;
  const name = "Veli";
  const surName = "Kiraz";

  return (
    <div>
      {isLogin ? (
        <h2>
          Sirketimize hosgeldiniz sayin {name} {surName}{" "}
        </h2>
      ) : (
        <h2>Dogru bilgi girdiginize emin misiniz?</h2>
      )}
    </div>
  );
};

export default IsLogin;
