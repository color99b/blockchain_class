import { useEffect, useState } from "react";
import "./App.css";
import useWeb3 from "./useWeb3";
import axios from "axios";
function App() {
  const [web3, account] = useWeb3();
  const [candidateList, setCandidateList] = useState([]);
  //0x7170c8589dF1F09f5942d962b473d0D6Bb97810e
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "candidates",
      });
      // setCandidateList([...result.data.candidateList, "hello", "asdasd"]);
      setCandidateList(result.data.candidateList);
    })();
  }, []);

  return (
    <div className="App">
      <h1>오점뭐?</h1>
      <div className="vote-list">
        {candidateList.map((item, idx) => (
          <Candidate
            key={`candidates-${idx}`}
            item={item}
            account={account}
            web3={web3}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

const Candidate = ({ item, account, web3 }) => {
  const [vote, setVote] = useState(0);
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "totalVotesFor",
        item,
      });
      setVote(result.data.vote);
      web3.eth
        .subscribe("logs", { address: result.data.CA })
        .on("data", (log) => {
          const params = [
            { type: "string", name: "candidate" },
            { type: "uint", name: "votes" },
          ];
          const value = web3.eth.abi.decodeLog(params, log.data);
          if (value.candidate == item) setVote(value.votes);
        });
    })();
  }, []);

  const onClick = async () => {
    const result = await axios.post("http://localhost:8080/api/send", {
      method: "voteForCandidate",
      candidate: item,
      from: account,
    });
    web3.eth.sendTransaction(result.data);
    // console.log(result.data);
    // setVote(result.data.vote);
  };
  return (
    <div className="vote-item" onClick={() => onClick()}>
      <h3>{item}</h3>
      <div className="vote">{vote}</div>
    </div>
  );
};
