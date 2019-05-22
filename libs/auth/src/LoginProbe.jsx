import React from 'react';

const LoginProbe = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated ? (
        <p>You're logged in.</p>
      ) : (
        <p>You're not logged in.</p>
      )}
    </div>
  );
};

export default LoginProbe;
