import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";
// 데이터를 stream화 해준다.

const app: Express = express();
dotenv.config();
const pinata = new pinataSDK(process.env.API_Key, process.env.API_Secret);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const upload = multer();
app.get("/api/list", (req: Request, res: Response) => {
  const temp = [
    {
      name: "Test NFT yoyo",
      description: "testing NFT with Pinata",
      image:
        "https://gateway.pinata.cloud/ipfs/Qme5UAngWoRmVM4XURcNyKfEWcs74etgsB5eCxohyC5tCo",
    },
  ];
  res.send(temp);
});

app.post(
  "/api/mint",
  upload.single("file"),
  async (req: Request, res: Response) => {
    const { name, description }: { name: string; description: string } =
      req.body;
    const imgResult: {
      IpfsHash: string;
      PinSize: Number;
      Timestamp: string;
      isDuplicate?: Boolean;
    } = await pinata.pinFileToIPFS(Readable.from(req.file.buffer), {
      pinataMetadata: {
        name: Date.now().toString(),
      },
      pinataOptions: {
        cidVersion: 0,
      },
    });
    console.log(imgResult);
    if (imgResult.isDuplicate) {
      console.log("같은 이미지");
    }
    const jsonResult = await pinata.pinJSONToIPFS(
      {
        name,
        description,
        // image: "https://gateway.pinata.cloud/ipfs/" + imgResult.IpfsHash,
        image: `https://gateway.pinata.cloud/ipfs/${imgResult.IpfsHash}`,
      },
      {
        pinataMetadata: {
          name: Date.now().toString() + ".json",
        },
        pinataOptions: {
          cidVersion: 0,
        },
      }
    );
    console.log(jsonResult);
    res.send("mint success");
  }
);

app.listen(8080, () => {
  console.log("8080 server open");
});
