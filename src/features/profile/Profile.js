import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {selectLogged} from "../login/loginSlice";

import {useNavigate} from "react-router-dom";

export function Profile() {
  const isLogged = useSelector(selectLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged !== 'yes')
      navigate('/login', { replace: true });
  }, [isLogged]);

  if (isLogged !== 'yes') return false;

  return (
    <div>
      <iframe src="//coub.com/embed/148lu6?muted=false&autostart=false&originalSize=false&startWithHD=false"
              allowFullScreen frameBorder="0" width="480" height="480" allow="autoplay"></iframe>
    </div>
  );
}
