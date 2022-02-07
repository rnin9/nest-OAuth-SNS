## OAuth2.0 SNS Authentication, Authorization


## Installation

```bash
$ npm install
```

```bash
$ vim config/default.yaml
```

and write yaml file like below
```
server:
  port: `${portNum}`

google:
  client_id: `${googleClient_Id}`
  client_secret: `${googleClient_secret}`
  callback_url: `${callback_URL}`

jwt:
  jwt_secret: `${jwt_Secret}`
  jwt_expires_in: `${expired Time}`
```

## Running the app

```bash

# watch mode
$ npm run start:dev

```

## End Point
[GET]
 http://localhost:${port}/api/login/google-oauth => 구글 로그인 endpoint<br/>
[GET] http://localhost:${port}/api/login/google-oauth/redirect => google login callback URL, Response는 access_token (jwt)<br/><br/>

[GET] , Authorization Hearder (access_token) http://localhost:${port}/api/login/google-oauth/profile => jwt payload 검증


## Work flow
![image](https://user-images.githubusercontent.com/62874963/152736164-d5f529af-9cfa-4ecb-93a8-908888074fad.png)

