interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '34vBb8VQoPegI7dDb42pY07P56RQgTgZ',
  domain: 'joej326.auth0.com',
  callbackURL: 'http://localhost:3001/welcome'
};
