import React from 'react';

const LoginProbe = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <p>You're logged in.</p> : <p>You're not logged in.</p>}
    </div>
  );
};

export default LoginProbe;
