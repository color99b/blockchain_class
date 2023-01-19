// lib => 다른 프로젝트에 그대로 적용 가능한 코드일때, 라이브러리의준말
// express.static 적용시 라우터에 따라 파일을 바로 응답한다.
// static.js에서 public 내의 파일, 폴더를 미리 읽어둔다.

const fs = require("fs");
const path = require("path");

// console.log(__dirname);
// const publicPath = path.join(__dirname, "../", "public");
// console.log("publicPath", publicPath);
// const directory = fs.readdirSync(publicPath);
// // readdir < 폴더 내 모든 파일/ 폴더의 이름을 가져온다.
// // -Sync << 동기로 실행한다. (promise가 아니다)
// console.log(directory);

// const folderStatus = fs.statSync(publicPath);
// //stat은 파일의 정보를 가져온다.
// console.log(folderStatus);

// fs.stat(path.join(publicPath, "index.html"), (err, stat) => {
//   console.log(stat.isFile());
// });

//Array.join(a) = > a를 각 아이템 사이에 넣고 string화 한다.
// array는 [1,2,3,4] 이런식으로 아이템이 존재
// path.join(a, b, c, ...) => a,b,c, ... 을 연결하여 경로를 만든다.
// path는" C:\User", "kga-00", "Documents" 일때
// C:\User\kga-00\Documents  이런식으로 합쳐준다는 뜻임.
function getStaticPath(root = "public") {
  const staticRoutes = {};
  const publicPath = path.join(__dirname, "../", "public");
  function find(currentPath) {
    const directory = fs.readdirSync(currentPath);
    for (let i = 0; i < directory.length; ++i) {
      const findPath = path.join(currentPath, directory[i]);
      console.log("findPath", findPath);
      const isFile = fs.statSync(findPath).isFile();
      if (isFile) {
        //파일이면
        let router = findPath.replace(publicPath, "");
        console.log("router 1 : ", router);
        if (router.indexOf("index.html") > -1)
          router = path.join(router, "../");
        console.log("router 2 : ", router);

        router = router.replace(/\\/g, "/");
        console.log("router 3 : ", router);
        if (router.length > 1 && router[router.length - 1] === "/") {
          router = router.slice(0, -1);
        }
        staticRoutes[router] = findPath;
      } else {
        //폴더면
        find(findPath);
      }
    }
  }

  find(publicPath);
  console.log("staticRoutes", staticRoutes);

  global.staticRoutes = staticRoutes;
  return staticRoutes;
}
module.exports = getStaticPath;
