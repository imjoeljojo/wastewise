import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   getCurrentWalletConnected();
  //   addWalletListener();
  // }, [walletAddress]);

  const connectWallet = async () => {
    // check if meta mask is installed
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        // this setWalletAddress is a kind of react State functions which stores the data to const walletAddress temporarly
        setWalletAddress(accounts[0]);
        navigate("/userdashboard");
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
          navigate("/userdashboard");
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        navigate("/userdashboard");
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress(null);
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className="home">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <h1 className="navbar-item is-size-4">WWA</h1>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end is-align-items-center">
              {/* Button for connect wallet*/}
              <button
                className="button is-white connect-wallet"
                onClick={connectWallet}
              >
                <span className="is-link has-text-weight-bold">
                  Connect Wallet
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero is-fullheight">
        <div className="faucet-hero-body">
          <div className="container has-text-centered main-content">
            <h1 className="title is-1">WasteWise</h1>
            <p>An Blockchain App for Waste Management</p>
          </div>
        </div>
      </section>
    </div>
  );
}
