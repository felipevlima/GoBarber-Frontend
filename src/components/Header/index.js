import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

import logoPurple from '~/assets/logoPurple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Felipe Vieira</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
