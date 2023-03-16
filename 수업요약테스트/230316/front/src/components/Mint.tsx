import axios from "axios";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

export const Mint = () => {
  const [NFTname, setNFTname] = useState<string>("");
  const [NFTDescription, setNFTDescription] = useState<string>("");
  const [file, setFile] = useState<File | undefined>();
  const [img, setImg] = useState<string | ArrayBuffer>("");
  const nameInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setNFTname(e.currentTarget.value);
  }, []);
  const descriptionInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    setNFTDescription(e.currentTarget.value);
  }, []);

  const fileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      setFile(e.currentTarget.files[0]);
      const reader = new FileReader();
      // 파일을 읽는 객체를 만든다.
      reader.readAsDataURL(e.currentTarget.files[0]);
      //파일 내용을 가지고 element에서 띄울 수 있게 한다.
      reader.onload = () => {
        if (reader.result) {
          setImg(reader.result);
        }
      };
    }
  }, []);
  const mint = async () => {
    if (!NFTname || !NFTDescription || !file) return;
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("name", NFTname);
    formData.append("description", NFTDescription);
    const result = (
      await axios.post("http://localhost:8080/api/mint", formData)
    ).data;
    console.log(result);
  };

  return (
    <div>
      <input type="text" onInput={nameInput} placeholder={"NFT NaMe"} />
      <input
        type="text"
        onInput={descriptionInput}
        placeholder={"NFT description"}
      />

      <input type="file" onChange={fileChange} />
      <button onClick={mint}>Mint!</button>
      {img ? (
        <div>
          <img src={img.toString()} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
