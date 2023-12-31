import './home.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  return (
    <div style={{ backgroundColor: '#dadef7', overflow: 'hidden' }}>
      {account?.login ? (
        <div style={{ backgroundColor: '#dadef7' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 150,
              marginTop: 100,
              marginBottom: 50,
            }}
          >
            <div style={{ marginTop: 150, marginRight: 50 }}>
              <h1 style={{ fontSize: '28px', fontWeight: '500' }}>Welcome to App home page</h1>
              <span style={{ fontSize: '62px', fontWeight: 800, fontFamily: 'public-sans', color: '#012C78' }}>
                A stunning React application generated using WDA
              </span>
              <br />
              <br />
              <h5>
                <Alert style={{ backgroundColor: '#EDEDED', borderColor: '#EDEDED', marginRight: '50px' }}>
                  <span style={{ color: '#012C78' }}>
                    <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                      You are logged in as user {account.login}.
                    </Translate>
                  </span>
                </Alert>
              </h5>
              <br />
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h5>To explore about our products you can refer here</h5>
                <button
                  style={{
                    backgroundColor: '#a6b2ff',
                    height: '60px',
                    width: '250px',
                    borderRadius: '35px',
                    borderColor: '#a6b2ff',
                    marginLeft: '20px',
                  }}
                  onClick={() => window.open('https://tic-oss.github.io/', '_blank')}
                >
                  <a href="https://tic.comakeit.com/" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '18px' }}>
                    Explore
                  </a>
                </button>
              </div>
            </div>
            <div>
              <img
                src="content/images/logo.png"
                style={{
                  width: '750px',
                  height: '750px',
                  marginTop: '100px',
                  left: '376px',
                  border: '1px solid transparent',
                  borderTopLeftRadius: '60px',
                }}
              ></img>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#012C78',
              height: '80px',
              marginTop: '50px',
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'open-sans',
              paddingTop: '10px',
            }}
          >
            <span style={{ color: '#FFF' }}>TIC-App</span>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: '#dadef7' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 150,
              marginTop: 100,
              marginBottom: 50,
            }}
          >
            <div style={{ marginTop: 150, marginRight: 50 }}>
              <h1 style={{ fontSize: '28px', fontWeight: '500' }}>Welcome to App home page</h1>
              <span style={{ fontSize: '62px', fontWeight: 800, fontFamily: 'public-sans', color: '#012C78' }}>
                A stunning React application generated using WDA
              </span>
              <br />
              <br />
              <h5>To explore about our products you can refer here</h5>
              <br />
              <button
                style={{
                  backgroundColor: '#1a256b',
                  marginRight: '100px',
                  height: '60px',
                  width: '250px',
                  borderRadius: '35px',
                  borderColor: '#1a256b',
                }}
                onClick={() => (window.location.href = getLoginUrl())}
              >
                <a href={getLoginUrl()} style={{ color: '#FFF', textDecoration: 'none', fontSize: '18px' }}>
                  Sign in
                </a>
              </button>
              <button
                style={{
                  backgroundColor: '#a6b2ff',
                  height: '60px',
                  width: '250px',
                  borderRadius: '35px',
                  borderColor: '#a6b2ff',
                }}
                onClick={() => window.open('https://tic-oss.github.io/', '_blank')}
              >
                <a href="https://tic-oss.github.io/" target="_blank" style={{ color: 'black', textDecoration: 'none', fontSize: '18px' }}>
                  Explore
                </a>
              </button>
            </div>
            <div>
              <img
                src="content/images/logo.png"
                style={{
                  width: '750px',
                  height: '750px',
                  marginTop: '100px',
                  left: '376px',
                  border: '1px solid transparent',
                  borderTopLeftRadius: '60px',
                }}
              ></img>
            </div>
          </div>
          <div
            style={{
              backgroundColor: '#012C78',
              height: '80px',
              marginTop: '50px',
              textAlign: 'center',
              fontSize: '20px',
              fontFamily: 'open-sans',
              paddingTop: '10px',
            }}
          >
            <span style={{ color: '#FFF' }}>TIC-App</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
