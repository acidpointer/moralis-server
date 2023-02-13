import React, { useEffect, useState } from "react";
import { EvmChain } from '@moralisweb3/common-evm-utils';

import { Contract, ContractInterface, ethers } from 'ethers';
import Moralis from 'moralis';



const App: React.FC = () => {
  const [account, setAccount] = useState<string>();

  useEffect(() => {
    if ((window as any).ethereum) {
      (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      }).then((accounts: string[]) => {
        setAccount(accounts[0])
      });

      return;
    }

    console.log('Metamask error!');
  }, []);

  useEffect(() => {
    // @ts-ignore
    Moralis.initialize = (import.meta.env.M_APP_ID);

    // @ts-ignore
    Moralis.serverUrl = import.meta.env.M_SERVER_URL;
    Moralis.start({
      serverUrl: import.meta.env.M_SERVER_URL,
      appId: import.meta.env.M_APP_ID,
      masterKey: import.meta.env.M_MASTER_KEY,
    });
  }, []);

  const handleClick = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (account) {
      const res = await Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.POLYGON,
        address: account,
      });
      console.log(res);
    }

    console.log('NATIVE BALANSES ERROR!!!');
  };

  return (
    <button onClick={handleClick}>Hello!</button>
  )
};

export default App;