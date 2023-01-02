# yarn build란?

- 우리가 작성한 jsx, css, js, html 파일 등등을 하나로 합쳐서 Front에서
  인식할 수 있는 파일로 생성해준다.

- front에서 인식할 수 있는 파일

  - html, css, js, png, 등등

- webpack, babel 라이브러리를 사용하게 된다.

  - webpack이란 javascript 모듈 번들러
    - 파일을 하나로 묶어주는 기능을 한다.
    - 난독화, 코드 압축등을 진행한다.
  - babel 이란 js compiler
    - 기존에 ES6등 최신 js문법을 지원하지 않는 브라우저를 위해 ES5 이하의 문법으로 수정해준다.
  - EX) import -> require()

- 하나로 완성된 build 폴더 내의 파일들을 Front의 파일로 배포하게 된다.

- react로 개발된 프로젝트는 yarn build(npm build) 명령어를 실행해서 build 폴더에 생성되는 파일로 웹 페이지를 배포한다.
  - AWS EC2 인스턴스에 build 폴더 내에 있는 파일, 폴더를 모두 올려 웹페이지를 출력할 수 있다.

# putty 입력 순서

1. sudo apt-get update
2. sudo apt-get upgrade -y

   - which services should be restarted ?
     - 여러 프로그램들을 업데이트 했다.
     - 해당 프로그램이 컴퓨터의 재시작 시 시작할 때 어떤 프로그램으로 확인을 할 것인가 설정한다.
     - 최신 Linux에 추가된 기능인데 그냥 OK 눌러 넘어가도 무관하다.

3. sudo apt-get install -y apache2 nodejs npm mysql-server

-> putty 설치 끝나면 filezila 로 서버연결하고

4.  cd /var/www 로 html 폴더 root변경

5.  sudo chmod 777 html -> html 폴더에 대한 모든 권한을 준다.

    - -> chmod는 권한 설정프로그램이다. 777은 모든 설정권한, -R은 하위 모든 폴더/파일에 같은 권한 적용

6.  sudo mkdir server 후 sudo chmod 777 server -R

    - -> mkdir 는 폴더 생성.

7.  cd server -> npm install -> npm start

8.  sudo /usr/bin/mysql -u root -p

    - -> mysql 서버에 접속한다.
    - -> 초기 패스워드는 없어서 그냥 빈 enter 입력

9.  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

    - -> root 계정의 비밀번호를 1234로 수정한다.
    - -> `localhost` 는 현재 위치를 뜻하며, localhost -> EC2 인스턴스 내의 mysql server를 뜻한다.
    - -> exit; => sudo /usr/bin/mysql -u root -p => 설정한 비번 입력해서 mysql에 정상적으로 접속되는지 확인
    - show databases; : 현재 db들을 확인한다.
      - create database tesla character set utf8mb4 collate utf8mb4_general_ci;

10. apache의 설정을 수정한다.

    - cd /etc/apache2/sites-available
      - apache에 대한 설정이 있는 폴더이다.
      - 기본적으로 000-default.conf 파일로 설정한다.
    - sudo vi 000-default.conf
      - vi << 윈도우 기준으로 메모장이다.
      - <VirtualHost \*:80> << 80 port로 요청이 들어오면 아래의 설정으로 응답한다.
      - "#" 은 주석이다.
      - "DocumentRoot" 는 Root 폴더를 설정한다.
        - 현재는 "/var/www/html" 로 설정되어 있다.
    - i를 입력하면 수정모드로 변경된다. 입력시에는 무조건 수정모드에서 입력해야한다. 수정 모드를 종료하려면 esc를 누른다.

    -vi를 종료하고 싶을 때는 수정 모드가 아닌 상태로, 즉 아래에 "--insert"가 없는 상태로 ":" 를 입력후에 "q", "w", "!" 등을 입력

        - "q" 는 종료
        - "w" 는 저장
        - "!" 는 강제
        - "wq!" 강제로 저장후 종료

    ```
    ProxyPreserveHost On
    ProxyRequests Off
    <Proxy *>
      Order deny,allow
      Allow from all
    </Proxy>
    <Location /api>
      ProxyPass http://localhost:8080/api
      ProxyPassReverse http://localhost:8080/api
    </Location>

    ProxyPreserveHost: HTTP 요청에 대해서 Header의 host 부분을 고정한다. << 요청을 보낸 주소를 수정하지 않는다. 클라이언트에서 접속한 주소를 수정하지 않고 proxy 요청을 보낸다. 즉 node.js에 요청을 보낼 때 클라이언트의 주소를 전달한다.

    ProxyRequests: On 설정의 경우 Proxy, Off 설정의 경우 Reverse Proxy를 설정한다.

    Proxy : proxy에 대한 보안 설정
      - order : 어떤 설정을 할 것인가? deny (거절), allow(허락)
      - allow : 접속 가능한 주소를 설정한다-
        - from All << 모든 주소에서 접근 가능
      - deny : 접속 불가능한 주소를 설정한다.

    Location : 접속한 라우터에 대한 설정(라우터 구분?)
      - ProxyPass : 요청할 주소 설정
      - ProxyPassReverse : 응답 받을 주소 설정
    ```

11. sudo a2enmod proxy proxy_http

    - appache 의 proxy 모듈을 활성화한다.
    - appache 에서 proxy를 사용하기 위해서 확장 프로그램을 활성화한다.

12. sudo service apache2 restart

    - apache2의 설정을 수정했으니 재시작한다.

13. React 프로젝트 배포 시 메인 홈페이지 이외의 라우터에서 새로고침 시 404가 출력되는 issue 발생

    - 원인 : apach2에서 폴더를 먼저 찾아 연결하기 때문에 index.html(react project) 에 연결되지 않아 생기는 문제이다.
    - 해결방법 : apache2의 rewrite 모듈을 사용하여 수정한다.

      - 순서

        1. 000-default.conf 파일을 수정하자.

        - 아래의 내용을 입력하자.

        ```
              <Directory "/var/www/html">
                  AllowOverride All
              <Directory>

        ```

        - directory : 해당 폴더/파일에 대한 설정
        - AllowOverride : 접근 방식에 대한 보안 설정
          - All : 새로운 접근 방식을 설정할 것이다 (덮어쓰기 가능)

        2. .htaccess 파일을 생성한다.

        - 해당 파일 위치 : React의 public || React의 build || 서버의 /var/www/html 폴더
          - 추천은 react의 public 위치 / yarn build시 그대로 build 폴더에 복제되기 때문. 단, index.html 파일은 수정된다.
            - src 폴더 내의 모든 폴더/파일은 난독화 되어 저장된다.
        - 내용은 아래와 같이 입력한다.

        ```
        Options -MultiViews
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^ index.html [QSA,L]
        ```

        - Options : 이름그대로 옵션을 설정한다.
          - MultiViews : 서버의 하위 라우터가 없을 경우 비슷한 파일을 찾아서 응답한다.
        - RewriteEngine : rewrite 모듈을 사용할 것인지 설정한다.
          - On
        - RewriteCond : rewrite 모듈 적용에 대한 조건을 설정한다.
          - REQUEST_FILENAME : 서버 설정 상의 Root 폴더(지금 설정한 프로젝트(tesla)는 : /var/www/html)
          - -f : 파일이 있는지 확인한다. << 없으면 모듈을 적용한다.
        - RewriteRule : 모듈 적용 규칙
          - ^ index.html : 정규표현식으로 index.html로 수정한다.
            - ex) 125.154.3.5/어쩌구저쩌구 => 125.154.3.5/index.html
          - QSA : queryString을 붙이는 설정
          - L : 이후 다른 설정을 무시한다.

        3. sudo a2enmod rewrite

        - rewrite 모듈을 활성화한다.

14. PM2를 사용해서 Node.js의 Express 서버를 백그라운드에서 실행시키기.
    - PM2는 Node.js 프로세스를 관리하는 라이브러리이다.
    - 간단하게 설명하면 백그라운드엣 실행시켜두고 멈추고 등등 할 수 있다.
    - 순서
      1. sudo npm i -g pm2
      2. sudo pm2 start npm -- start (경로는 서버의 경로)
      3. pm2 list <<
      4.

-- ubutun 에서는 apache2이지만 linux 에서는 httpd라고 한다. 설정이 살짝 다르지만 둘 다 apache 이다.
