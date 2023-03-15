// 기능 : backend 에서 pinata에 file upload
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const pinFileToIpfs = async () => {
  const formData = new FormData();
  const src = "imgs/ddd.png";
  const file = fs.createReadStream(src);
  formData.append("file", file);
  const metadata = JSON.stringify({
    name: "my character.png",
  });
  formData.append("pinataMetaData", metadata);
  const options = JSON.stringify({
    cidversion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        maxBodyLength: "Infinity",
        headers: {
          "content-type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: "7935587079ca75655896",
          pinata_secret_api_key:
            "e3f28fda7d0da9de5bfaacaf78591602dfee45f8544a9388ebb66e3bf31c4f7f",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
pinFileToIpfs();
// IpfsHash : QmYaEeDzRf7R2RkUVAGk3yrM3by1ZZAsPCdYuzZFLmdhYe
// const pinJson = async () => {};
const pinJson = async () => {
  const formData = {
    pinataMetaData: {
      name: "KYJ NFT",
    },
    pinataOptions: {
      cidversion: 0,
    },
    pinataContent: {
      name: "KYJ NFT",
      description: "pinata Test",
      image:
        "https://gateway.pinata.cloud/ipfs/QmYaEeDzRf7R2RkUVAGk3yrM3by1ZZAsPCdYuzZFLmdhYe",
    },
  };

  try {
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      formData,
      {
        headers: {
          "content-type": `application/json`,
          pinata_api_key: "7935587079ca75655896",
          pinata_secret_api_key:
            "e3f28fda7d0da9de5bfaacaf78591602dfee45f8544a9388ebb66e3bf31c4f7f",
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

pinJson();
