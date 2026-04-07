---
title: "Here's Who Built on Quorum at ETH Denver 2019"
description: "A web3 gaming experience with no extensions, a permissioned security token platform, and a supply chain DApp — the three Quorum bounty winners from ETHDenver 2019."
date: "2019-02-21"
category: "TECHNICAL"
readTime: "5 min"
forum_url: "https://medium.com/@mateo_ventures/heres-who-built-on-quorum-at-eth-denver-f708be33e30"
forum_name: "Medium"
---

ETHDenver — the land of Bufficorns and Ethereum developers.

The Quorum team made it out to Denver, Colorado to meet with builders across the web3 ecosystem. The amount of projects building on Ethereum, MakerDAO, POA, OpenZeppelin was remarkable. If you've been to one of these events, you know the feeling — the Ethereum community experiencing a future with distributed technologies firsthand, not just talking about it.

We offered three bounties to give developers an incentive to build on Quorum:
- Best use of privacy features
- Best use of performance and transaction speed
- Best use of public Ethereum tools with Quorum

Here's what was built.

---

## 1. Tidbits — Web3 with No Extensions, No Modals

**Team: Bradley Clarke, Gabe Ibarra, Taylor Dawson**

Tidbits is a word magnet game — you assemble brief poems from fragments, like the poetry magnets on a refrigerator door. The catch: it runs entirely on-chain, and new users never touch ETH.

**How it works:** Visitors who arrive without a wallet are given a key automatically. A unique contract manages gas for the user, ensuring there's always just enough ETH to keep playing. No MetaMask popup. No "install a wallet" prompt. Just play.

**Tech stack:**
- DApp runs on Quorum POA network
- Custom Oracle using ION protocol bridges Rinkeby to POA network
- Decentral Key/Transaction Manager: accepts OAuth login (Google) to create keys and sign transactions
- Gas management contract handles user balances automatically
- Rinkeby-based subscription manager keeps the DApp funded

Tidbits made it to the Top 20 on the main stage at ETHDenver. A genuinely fun demo of what UX-first crypto can look like.

---

## 2. RToken — Permissioned Security Token Standard

**Team: Shane Jarvie, Elena De La Paz, Ryan Hall**

RToken is a permissioned security token standard for global issuance and trading of ERC20 digital assets — compliant with offering and investor-level regulation, with fine-tuned privacy controls for issuers.

The platform uses the R-Token protocol for compliance (transfer restrictions, investor whitelists) and Quorum for transaction privacy — commercial terms and investor data are not exposed to the full network.

For the compliance layer: standard ERC20 `transfer()` and `transferFrom()` functions are extended with a regulator service that enforces compliance rules before any transfer executes.

The practical use case: a company issuing a private placement can run it entirely on-chain, with investor KYC stored privately in Tessera, compliance rules enforced automatically, and a full audit trail visible only to authorized parties.

---

## 3. GeoHunter — On-Chain Treasure Hunt

**Team: [multiple contributors]**

GeoHunter is a tracking DApp in treasure hunt format. A series of QR codes must be scanned by users in the correct order. Each QR code has an associated picture on IPFS showing its location. All user data, tag data, and scan history is stored on Quorum.

The IPFS hash for each clue image lives on-chain. The race is: fastest user to scan all QR codes in sequence wins. Everything is verifiable — no one can fake a scan, skip a step, or dispute the leaderboard.

A simple concept that demonstrates what immutability actually looks like in practice: a permanent, tamper-proof record of who was where, when.

---

*ETHDenver continues to be one of the best events in the Ethereum ecosystem. The quality of what developers build in 48 hours — with real cryptographic guarantees, not just demos — keeps getting better. See you in 2020.*
